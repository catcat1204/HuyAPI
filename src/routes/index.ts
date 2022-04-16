import { Router } from "express";
import typeRouter from "./v2";
import ioeRouter from "./ioe";
import adminRoute from "./admin";
const router = Router();
router.use("/v2", typeRouter);
router.use("/ioe", ioeRouter);
router.use("/admin", adminRoute);
router.get("/", (req, res) => {
  res.redirect("https://docs.huyapi.ga/");
});
export default router;
