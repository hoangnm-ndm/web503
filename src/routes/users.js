import { Router} from 'express'
import { create, getAll, getDetail, remove, update } from '../controllers/user'

const routerUsers = Router()

routerUsers.post("/", create)
routerUsers.put("/:id", update)
routerUsers.get("/", getAll)
routerUsers.get("/:id" , getDetail)
routerUsers.delete("/:id" , remove)

export default routerUsers