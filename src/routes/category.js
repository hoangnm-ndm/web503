import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getOneCategoryById,
  getOneCategoryByName,
  getOneCategoryBySlug,
  removeCategory,
  updateCategory,
} from "../controllers/category";
import { checkBodyRequestCategory } from "../middlewares/checkBodyRequest";
import { checkIsAdmin } from "../middlewares/checkIsAdmin";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.post(
  "/",
  checkIsAdmin,
  checkBodyRequestCategory,
  createCategory
);
categoryRouter.get("/:id", getOneCategoryById);
categoryRouter.get("/name/:name", getOneCategoryByName);
categoryRouter.get("/slug/:slug", getOneCategoryBySlug);
categoryRouter.patch(
  "/:id",
  checkIsAdmin,
  checkBodyRequestCategory,
  updateCategory
);
categoryRouter.delete("/:id", checkIsAdmin, removeCategory);

export default categoryRouter;
