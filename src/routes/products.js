import express from "express";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "../controllers/products";
const routerProducts = express.Router();

routerProducts.get("/", getAll);
routerProducts.get("/:id", getDetail);
routerProducts.put("/:id", update);
routerProducts.post("/", create);
routerProducts.delete("/:id", remove);

export default routerProducts;
