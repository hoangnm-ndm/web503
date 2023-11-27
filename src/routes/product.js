import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getDetailProduct,
  updateProduct,
} from "../controllers/products";
import { checkRequestBodyProduct } from "../middlewares/checkReqProduct";

const routerProduct = Router();
routerProduct.get("/", getAllProduct);
routerProduct.get("/:id", getDetailProduct);
routerProduct.delete("/:id", deleteProduct);
routerProduct.post("/", checkRequestBodyProduct, createProduct);
routerProduct.put("/:id", checkRequestBodyProduct, updateProduct);
export default routerProduct;
