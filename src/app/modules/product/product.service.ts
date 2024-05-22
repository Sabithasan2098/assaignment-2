import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"

const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product)
  return result
}

const getAllProductFromDB = async () => {
  const result = await ProductModel.find()
  return result
}
const getAProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ id })
  return result
}

const updateProductInDB = async (id: string, updateData: TProduct) => {
  const result = await ProductModel.updateOne({ id: id }, { $set: updateData })
  return result
}
export const productService = {
  createProductIntoDB,
  getAllProductFromDB,
  getAProductFromDB,
  updateProductInDB,
}
