import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getDetailProduct,
  updateProduct,
} from "../controllers/products";

const router = Router();
router.get("/products", getAllProduct);
router.get("/products/:id", getDetailProduct);
router.delete("/products/:id", deleteProduct);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
export default router;
