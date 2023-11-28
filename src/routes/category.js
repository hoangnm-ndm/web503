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

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.post("/", createCategory);
categoryRouter.get("/:id", getOneCategoryById);
categoryRouter.get("/name/:name", getOneCategoryByName);
categoryRouter.get("/slug/:slug", getOneCategoryBySlug);
categoryRouter.patch("/:id", updateCategory);
categoryRouter.delete("/:id", removeCategory);

export default categoryRouter;
