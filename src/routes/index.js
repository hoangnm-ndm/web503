import express from "express";
import productRouter from "./product";
import authRouter from "./auth";
const router = express.Router();

router.use("/products", productRouter);
router.use("/auth", authRouter);

export default router;
