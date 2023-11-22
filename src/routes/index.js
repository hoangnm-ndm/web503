import { Router } from "express";
import routerProduct from "./product";

const router = Router();
router.use("/products", routerProduct);

export default router;
