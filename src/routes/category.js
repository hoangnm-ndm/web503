import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  updateCategory,
} from "../controllers/category";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.post("/", createCategory);
// categoryRouter.get("/:id", getDetailCategory);
categoryRouter.patch("/:id", updateCategory);
// categoryRouter.delete("/:id", removeCategory);

export default categoryRouter;
