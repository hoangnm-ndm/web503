import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  update,
  put,
} from "../controllers/product.js";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", create);
router.delete("/products/:id", remove);
router.patch("/products/:id", update);
router.put("/products/:id", put);

export default router;
