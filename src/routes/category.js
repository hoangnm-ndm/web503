import { Router } from "express";
import {
  createCategory,
  getAllCateries,
  getDetailCategory,
  removeCategory,
  updateCategory,
} from "../controllers/category";

const categoryRouter = Router();

categoryRouter.get("/", getAllCateries);
categoryRouter.post("/", createCategory);
categoryRouter.get("/:id", getDetailCategory);
categoryRouter.patch("/:id", updateCategory);
categoryRouter.delete("/:id", removeCategory);

export default categoryRouter;
