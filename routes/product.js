import {Router} from 'express'
import { deleteProduct, getAllProduct, getDetailProduct } from '../controllers/products'

const router = Router()
router.get('/products', getAllProduct)
router.get('/products/:id', getDetailProduct)
router.delete('/products/:id', deleteProduct)
// router.get('/products', getAllProduct)
export default router