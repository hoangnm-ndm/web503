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
import { checkIsAdmin } from "../middlewares/checkIsAdmin";

const routerCategory = Router();
routerCategory.get("/", getAllCategory);
routerCategory.get("/:id", getOneCategoryById);
routerCategory.delete("/:id", checkIsAdmin, removeCategory);
routerCategory.post(
  "/",
  checkIsAdmin,
  checkRequestBodyCategory,
  createCategory
);
routerCategory.put(
  "/:id",
  checkIsAdmin,
  checkRequestBodyCategory,
  updateCategory
);
routerCategory.get("/slug/:slug", getOneCategoryBySlug);
routerCategory.get("/name/:name", getOneCategoryByName);
export default routerCategory;
