import { Request, Response } from "express"
import validateProduct from "./product.validation"
import {
  createProductIntoDB,
  deleteProductFromDB,
  getAProductFromDB,
  getAllProductFromDB,
  searchProductByText,
  updateProductInDB,
} from "./product.service"

// post a product--------------------------------------->
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body
    const validateProductWithZod = validateProduct.parse(product)
    const result = await createProductIntoDB(validateProductWithZod)
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
export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await getAllProductFromDB()
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
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params

    const result = await getAProductFromDB(productId)
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
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const updateData = req.body.product

    const result = await updateProductInDB(productId, updateData)

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
export const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await deleteProductFromDB(id)
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
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

// search product into DB------------------------------>
export const searchProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query
    const result = await searchProductByText(searchTerm as string)
    res.status(200).json({
      success: true,
      message: `Products matching searchTerm ${searchTerm} fetched successfully!`,
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
