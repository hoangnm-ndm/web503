import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  findProduct,
  getAllProduct,
  getDetailProduct,
  updateProduct,
} from "../controllers/products";

const routerProduct = Router();
routerProduct.get("/", getAllProduct);
// routerProduct.get("/", getABC);
routerProduct.get("/:id", getDetailProduct);
// routerProduct.get("/find", findProduct);
routerProduct.delete("/:id", deleteProduct);
routerProduct.post("/", createProduct);
routerProduct.put("/:id", updateProduct);
export default routerProduct;
