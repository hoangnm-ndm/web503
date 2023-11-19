import { Router } from "express";
import productRouter from "./product";
import categoryRouter from "./category";

const router = Router();

router.use("/products", productRouter);
router.use("/categories", categoryRouter);

export default router;
