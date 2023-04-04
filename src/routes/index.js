import express from "express";
import productRouter from "./product";
import authRouter from "./auth";
import categoryRouter from "./category";
const router = express.Router();

router.use("/products", productRouter);
router.use("/auth", authRouter);
router.use("/categories", categoryRouter);

export default router;
