import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getDetailProduct,
  removeProduct,
  updateProduct,
} from "../controllers/product";
import { checkBodyRequestProduct } from "../middlewares/checkBodyRequest";
import {checkPermission } from "../middlewares/checkPermission";

const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getDetailProduct);
productRouter.delete("/:id", checkPermission, removeProduct);
productRouter.post("/", checkBodyRequestProduct, createProduct);
productRouter.put("/:id", checkBodyRequestProduct, updateProduct);

export default productRouter;
