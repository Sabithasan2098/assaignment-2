import { Request, Response } from "express"
import { productService } from "./product.service"
import validateProduct from "./product.validation"

// post a product--------------------------------------->
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body
    const validateProductWithZod = validateProduct.parse(product)
    const result = await productService.createProductIntoDB(
      validateProductWithZod,
    )
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
// get all product-------------------------------------->
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
// get a product--------------------------------------->
const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await productService.getAProductFromDB(id)
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    })
  }
}
// ---------------------------------------------------//
// update a product by id------------------------------>
// const updateProductById = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params
//     const product = req.body
//     const result = await productService.updateProductInDB(id, product)
//     res.status(200).json({
//       success: true,
//       message: "Product updated successfully!",
//       data: result,
//     })
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "something went wrong to update product",
//       error: err,
//     })
//   }
// }

export const productController = {
  createProduct,
  getAllProduct,
  getProductById,
  // updateProductById,
}
