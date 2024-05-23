import express from "express"
import {
  createProduct,
  deleteAProduct,
  getAllProduct,
  getProductById,
  searchProduct,
  updateProduct,
} from "./product.controller"
const router = express.Router()

router.post("/create-product", createProduct)
router.get("/search", searchProduct)
router.get("/get-all-product", getAllProduct)
router.get("/:productId", getProductById)
router.put("/:productId", updateProduct)
router.delete("/:id", deleteAProduct)

export const productRoutes = router
