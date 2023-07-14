import { Router} from 'express'
import routerProducts from './products'
import routerUsers from './users'


const router = Router()

router.use("/products", routerProducts)
router.use("/users", routerUsers)

export default router