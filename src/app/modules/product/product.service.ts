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
  const result = await ProductModel.aggregate([{ $match: { id } }])
  return result
}

const updateProductInDB = async (id: string, updateData: TProduct) => {
  const result = await ProductModel.updateOne({ id: id }, { $set: updateData })
  return result
}

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.updateOne({ id }, { isDeleted: true })
  return result
}
// search a product--------------------------------------->

const searchProductByText = async (searchTerm: string) => {
  const result = await ProductModel.find({
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } },
      { "variants.type": { $regex: searchTerm, $options: "i" } },
      { "variants.value": { $regex: searchTerm, $options: "i" } },
    ],
  })
  return result
}
// ------------------------------------------------------//
export const productService = {
  createProductIntoDB,
  getAllProductFromDB,
  getAProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
  searchProductByText,
}
