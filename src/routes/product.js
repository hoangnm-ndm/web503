import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getDetailProduct,
  removeProduct,
  updateProduct,
} from "../controllers/product";
import { checkBodyRequestProduct } from "../middlewares/checkBodyRequest";
import { checkIsAdmin } from "../middlewares/checkIsAdmin";

const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getDetailProduct);
productRouter.delete("/:id", checkIsAdmin, removeProduct);
productRouter.post("/", checkIsAdmin, checkBodyRequestProduct, createProduct);
productRouter.put("/:id", checkIsAdmin, checkBodyRequestProduct, updateProduct);

export default productRouter;
