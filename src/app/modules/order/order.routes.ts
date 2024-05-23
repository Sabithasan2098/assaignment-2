import express from "express"
import { createOrder, getAllOrder, searchOrder } from "./order.controller"
const router = express.Router()

router.post("/create-order", createOrder)
router.get("/search", searchOrder)
router.get("/get-all-order", getAllOrder)

export const orderRoutes = router
