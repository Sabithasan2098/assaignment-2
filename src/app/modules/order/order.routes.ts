import express from "express"
import { orderController } from "./order.controller"
const router = express.Router()

router.post("/create-order", orderController.createOrder)
router.get("/search", orderController.searchOrder)
router.get("/get-all-order", orderController.getAllOrder)

export const orderRoutes = router
