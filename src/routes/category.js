import express from "express";
import { checkPermission } from "../middlewares/checkPermission";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "../controllers/category";
const routerCategory = express.Router();

routerCategory.get("/", getAll);
routerCategory.get("/:id", getDetail);
routerCategory.put("/:id", checkPermission, update);
routerCategory.post("/", checkPermission, create);
routerCategory.delete("/:id", checkPermission, remove);

export default routerCategory;
