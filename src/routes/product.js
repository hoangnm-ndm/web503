import express from express
const router = express.Router()

router.get("/products", getAll)

export default router