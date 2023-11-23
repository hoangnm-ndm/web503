import { Router } from "express";
import { signUp } from "../controllers/auth";

const authRouter = Router();

authRouter.post("/signup", signUp);

export default authRouter;
