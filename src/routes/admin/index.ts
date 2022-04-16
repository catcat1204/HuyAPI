import { Router } from "express";
import { ApiKey } from "../../database/schemas";
import { createNewApiKey } from "../../utils/createNewApiKey";
import { checkApiKey } from "../../utils/checkApiKey";
import { renewApiKey } from "../../utils/renewApiKey";
const router = Router();

router.post("/createKey", async (req, res) => {
  if (req.headers["authorization"] == "catcat1204@huyapi.ga") {
    const plan = req.body.plan;
    console.log(plan);
    if (!plan) {
      res.status(400).send({
        error: "Missing plan",
      });
      return;
    }
    const key = await createNewApiKey(plan);
    console.log(`${new Date().toLocaleString()} - Created ApiKey: ${key.key}`);
    res.status(200).send({
      key: key.key,
      expires: key.expires,
      type: key.type,
      count: key.count,
      rate: key.rate,
      active: true,
    });
  } else {
    res.status(401).send({
      error: "Unauthorized",
    });
    return;
  }
});

router.post("/renewKey", async (req, res) => {
  if (req.headers["authorization"] == "catcat1204@huyapi.ga") {
    const api_key = req.body.api_key;
    const key = await renewApiKey(api_key);
    if (!key) {
      res.status(400).send({
        error: "Invalid api_key",
      });
      return;
    }
    console.log(`${new Date().toLocaleString()} - Renewed ApiKey: ${key.key}`);
    res.status(200).send({
      key: key.key,
      expires: key.expires,
      type: key.type,
      count: key.count,
      rate: key.rate,
      active: true,
    });
  } else {
    res.status(401).send({
      error: "Unauthorized",
    });
    return;
  }
});

router.post("/checkKey", async (req, res) => {
  if (req.headers["authorization"] == "catcat1204@huyapi.ga") {
    const api_key = req.body.api_key;
    const key = await checkApiKey(api_key);
    if (!key) {
      res.status(400).send({
        error: "Invalid api_key",
      });
      return;
    }
    res.status(200).send({
      key: key.key,
      expires: key.expires,
      type: key.type,
      count: key.count,
      rate: key.rate,
      active: true,
    });
  } else {
    res.status(401).send({
      error: "Unauthorized",
    });
    return;
  }
});

export default router;

1;
