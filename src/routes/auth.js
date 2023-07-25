import { Router } from "express"
import { signUp } from "../controllers/auth"

const routerAuth = Router()

routerAuth.post("/signup", signUp)

export default routerAuth