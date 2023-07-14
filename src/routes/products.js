import { Router} from 'express'
import { create, getAll, getDetail, remove, update } from '../controllers/product'

const routerProducts = Router()

routerProducts.post("/", create)
routerProducts.put("/:id", update)
routerProducts.get("/", getAll)
routerProducts.get("/:id" , getDetail)
routerProducts.delete("/:id" , remove)

export default routerProducts