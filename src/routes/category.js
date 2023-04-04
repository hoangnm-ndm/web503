import express from "express";
import {
  getAll,
  getDetail,
  create,
  update,
  remove,
} from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getDetail);
router.post("/", checkPermission, create);
router.put("/:id", checkPermission, update);
router.delete("/:id", checkPermission, remove);

export default router;
