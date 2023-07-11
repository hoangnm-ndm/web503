import { Router } from "express";
import routerProducts from "./products";
const router = Router();

router.use("/products", routerProducts);
// router.use("/categories", routerCategories);

export default router;
