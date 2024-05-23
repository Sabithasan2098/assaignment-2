import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"

export const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product)
  return result
}

export const getAllProductFromDB = async () => {
  const result = await ProductModel.find()
  return result
}
export const getAProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id)
  return result
}

export const updateProductInDB = async (id: string, updateData: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, updateData, {
    new: true,
  })
  return result
}

export const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndUpdate(id, { isDeleted: true })
  return result
}
// search a product--------------------------------------->

export const searchProductByText = async (searchTerm: string) => {
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
