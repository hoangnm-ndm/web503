import { Router } from "express";
import productRouter from "./product";

const router = Router();

router.use("/products", productRouter);

export default router;
