import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getDetailProduct,
  removeProduct,
  updateProduct,
} from "../controllers/product";

const routerProduct = Router();

routerProduct.post("/", createProduct);
routerProduct.get("/", getAllProduct);
routerProduct.get("/:id", getDetailProduct);
routerProduct.put("/:id", updateProduct);
routerProduct.delete("/:id", removeProduct);

export default routerProduct;
