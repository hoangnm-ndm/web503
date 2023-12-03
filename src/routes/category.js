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
import { checkPermission } from "../middlewares/checkPermission";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.post(
  "/",
  checkPermission,
  checkBodyRequestCategory,
  createCategory
);
categoryRouter.get("/:id", getOneCategoryById);
categoryRouter.get("/name/:name", getOneCategoryByName);
categoryRouter.get("/slug/:slug", getOneCategoryBySlug);
categoryRouter.patch(
  "/:id",
  checkPermission,
  checkBodyRequestCategory,
  updateCategory
);
categoryRouter.delete("/:id", checkPermission, removeCategory);

export default categoryRouter;
