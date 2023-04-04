import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermision";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", get);
router.post("/", checkPermission, create);
router.delete("/:id", checkPermission, remove);
router.patch("/:id", checkPermission, update);

export default router;
