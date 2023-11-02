import {Router} from 'express'
import { getAllProduct } from '../controllers/products'

const router = Router()
router.get('/products', getAllProduct)
// router.get('/products', getAllProduct)
// router.get('/products', getAllProduct)
// router.get('/products', getAllProduct)
export default router