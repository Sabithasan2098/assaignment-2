import express from "express"
import { productController } from "./product.controller"
const router = express.Router()

router.post("/create-product", productController.createProduct)
router.get("/search", productController.searchProduct)
router.get("/get-all-product", productController.getAllProduct)
router.get("/:id", productController.getProductById)
router.put("/:id", productController.updateProduct)
router.delete("/:id", productController.deleteAProduct)

export const productRoutes = router
