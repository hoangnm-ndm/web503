import express from "express";
import routerProducts from "./products";
import routerAuth from "./auth";
import routerCategory from "./category";
const router = express.Router();

router.use("/products", routerProducts);
router.use("/categories", routerCategory);
router.use("/auth", routerAuth);
export default router;
