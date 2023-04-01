import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  updatePatch,
} from "../controllers/category.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", get);
router.post("/", checkPermission, create);
router.patch("/:id", checkPermission, updatePatch);
router.delete("/:id", checkPermission, remove);

export default router;
