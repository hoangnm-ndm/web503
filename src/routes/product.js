import express from "express";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "../controllers/products";
const productRouter = express.Router();

productRouter.get("/", getAll);
productRouter.get("/:id", getDetail);
productRouter.post("/", create);
productRouter.put("/:id", update);
productRouter.delete("/", remove);

export default productRouter;
