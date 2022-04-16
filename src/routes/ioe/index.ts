import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  res.status(200).send(req.query);
});

export default router;
