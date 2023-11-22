import { Router } from "express";
import routerProduct from "./product";
import authRouter from "./auth";

const router = Router();
router.use("/products", routerProduct);
router.use("/auth", authRouter);

export default router;
