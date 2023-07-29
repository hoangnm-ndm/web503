import express from "express";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "../controllers/products";
import { checkPermission } from "../middlewares/checkPermission";
const routerProducts = express.Router();

routerProducts.get("/", getAll);
routerProducts.get("/:id", getDetail);
routerProducts.put("/:id", checkPermission, update);
routerProducts.post("/", checkPermission, create);
routerProducts.delete("/:id", checkPermission, remove);

export default routerProducts;
