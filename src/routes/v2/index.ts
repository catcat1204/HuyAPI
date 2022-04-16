import { Router } from "express";
import { ApiKey } from "../../database/schemas";
import { generateRandomURL } from "../../utils/generateRandomURL";
import config from "../../../config.json";
const router = Router();

router.get("/", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log(ip);
  const imageType = req.query.type;
  const apiKey = req.query.api_key;
  if (!imageType) {
    res.status(400).send({
      error: "Missing type",
    });
    return;
  } else {
    if (!config.WHITE_LIST.includes(ip as string)) {
      const KeyData = await ApiKey.findOne({
        key: apiKey,
      });
      if (!KeyData) {
        return res.status(400).send({
          error: "Invalid API key",
        });
      }
      if (KeyData.count >= KeyData.rate) {
        return res.status(400).send({
          error: "API key has reached its limit",
        });
      }
      if (KeyData.expires < Date.now()) {
        return res.status(400).send({
          error: "API key has expired",
        });
      }
      KeyData.count++;
      await KeyData.save();
    }
    const randomURL = await generateRandomURL(imageType as string);
    if (!randomURL) {
      return res.status(400).send({
        error: "Invalid type",
      });
    }
    return res.status(200).send(randomURL);
  }
});

export default router;
