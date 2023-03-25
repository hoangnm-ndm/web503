import express from "express";
import {
  getAll,
  getDetail,
  create,
  update,
  remove,
} from "../controllers/product.js";
const router = express.Router();

router.get("/products", getAll);
router.get("/product/:id", getDetail);
router.post("/products", create);
router.put("/product/:id", update);
router.delete("/product/:id", remove);

export default router;
