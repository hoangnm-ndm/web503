import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  updatePatch,
} from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", checkPermission, create);
router.patch("/products/:id", checkPermission, updatePatch);
router.delete("/products/:id", checkPermission, remove);

export default router;
