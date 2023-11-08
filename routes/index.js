import { Router } from "express";
import routerProduct from "./product";

const router = Router();
router.use("/products", routerProduct);
// router.use("/users", routerUser);
// router.use("/admin", routerAdmin);

export default router;
