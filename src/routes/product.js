import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getDetailProduct,
  removeProduct,
  updateProduct,
} from "../controllers/product";

const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getDetailProduct);
productRouter.delete("/:id", removeProduct);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);

export default productRouter;
