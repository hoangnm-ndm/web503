import express from "express";
import { getAll, get, create, update, remove } from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", get);
router.post("/", checkPermission, create);
router.put("/:id", checkPermission, update);
router.delete("/:id", checkPermission, remove);

export default router;
