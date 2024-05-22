import { Request, Response } from "express"
import { productService } from "./product.service"

// post a product--------------------------------------->
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body
    const result = await productService.createProductIntoDB(product)
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    })
  }
}
// ----------------------------------------------------//
// ---------------------------------------------------->
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductFromDB()
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    })
  }
}
// ---------------------------------------------------//

export const productController = {
  createProduct,
  getAllProduct,
}
