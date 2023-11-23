import { Router } from "express";
import productRouter from "./product";
import categoryRouter from "./category";
import authRouter from "./auth";

const router = Router();

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/auth", authRouter);

export default router;
