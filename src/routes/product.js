import express from "express";
import {
  create,
  getAll,
  getDetail,
  update,
  remove,
} from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";

const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", getDetail);
router.post("/products", checkPermission, create);
router.put("/products/:id", checkPermission, update);
router.delete("/products/:id", checkPermission, remove);

export default router;
