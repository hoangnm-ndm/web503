import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  update,
} from "../controllers/category.js";
import { checkPermision } from "../middlewares/checkPermisionForAdmin";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", get);
router.post("/", checkPermision, create);
router.delete("/:id", checkPermision, remove);
router.patch("/:id", checkPermision, update);

export default router;
