import { Router } from "express";
import router from "./product";
const routerProducts = Router();

routerProducts.use("/products", router);

export default routerProducts;
