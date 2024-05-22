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
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const updateData = req.body

    const result = await productService.updateProductInDB(id, updateData)

    res.status(200).json({
      success: true,
      message: "Update successful",
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
// delete a product from db--------------------------->
const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await productService.deleteProductFromDB(id)
    res.status(200).json({
      success: true,
      message: "delete product successfully",
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

export const productController = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteAProduct,
}
