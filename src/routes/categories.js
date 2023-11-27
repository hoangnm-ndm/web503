import { Router } from "express";
import { checkRequestBodyCategory } from "../middlewares/checkRequestBodyCategory";
import {
  createCategory,
  getAllCategory,
  getOneCategoryById,
  getOneCategoryByName,
  getOneCategoryBySlug,
  removeCategory,
  updateCategory,
} from "../controllers/categories";

const routerCategory = Router();
routerCategory.get("/", getAllCategory);
routerCategory.get("/:id", getOneCategoryById);
routerCategory.delete("/:id", removeCategory);
routerCategory.post("/", checkRequestBodyCategory, createCategory);
routerCategory.put("/:id", checkRequestBodyCategory, updateCategory);
routerCategory.get("/slug/:slug", getOneCategoryBySlug);
routerCategory.get("/name/:name", getOneCategoryByName);
export default routerCategory;
