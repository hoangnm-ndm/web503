import express from "express";
import routerProduct from "./product";
import routerCategory from "./category";
import routerAuth from "./auth";

const router = express.Router();

router.use("/products", routerProduct);
router.use("/categories", routerCategory);
router.use("/auth", routerAuth);

export default router;
