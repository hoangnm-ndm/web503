import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getDetailProduct,
  updateProduct,
} from "../controllers/products";

import { checkRequestBodyProduct } from "../middlewares/checkRequestBodyProduct";
import { checkIsAdmin } from "../middlewares/checkIsAdmin";

const routerProduct = Router();
routerProduct.get("/", getAllProduct);
routerProduct.get("/:id", getDetailProduct);
routerProduct.delete("/:id", checkIsAdmin, deleteProduct);
routerProduct.post("/", checkIsAdmin, checkRequestBodyProduct, createProduct);
routerProduct.put("/:id", checkIsAdmin, checkRequestBodyProduct, updateProduct);
export default routerProduct;
