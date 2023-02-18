import express from "express";

const router = express.Router();

router.get("/", (_, res) => {
  res.json({ message: "hello from home!" });
});

router.get("/hello", (_, res) => {
  res.json({ message: "hello world!" });
});

export default router;