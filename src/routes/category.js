import { Router } from "express";
import { createCategory, getAllCateries } from "../controllers/category";

const categoryRouter = Router();

categoryRouter.get("/", getAllCateries);
categoryRouter.post("/", createCategory);

export default categoryRouter;
