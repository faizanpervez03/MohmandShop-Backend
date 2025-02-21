import { Router } from 'express'
import { placeOrder } from '../controllers/orderControllers.js'

const router = Router()

router.post("/place-order", placeOrder)

export default router