import express from "express";
import routerProduct from "./product.js";
import routerCategory from "./category.js";
import routerAuth from "./auth.js";

const router = express.Router();

router.use("/products", routerProduct);
router.use("/categories", routerCategory);
router.use("/auth", routerAuth);

export default router;
