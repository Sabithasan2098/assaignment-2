import { ProductModel } from "../product/product.model"
import { OrderModel } from "./order.model"

type TOrderData = {
  email: string
  productId: string
  price: number
  quantity: number
}

const createOrderIntoDB = async (order: TOrderData) => {
  const product = await ProductModel.findById(order.productId)

  if (!product) {
    throw new Error(`can't find product with this ID:- ${order.productId}`)
  }

  const availableQuantity = product.inventory.quantity
  const requestedQuantity = order.quantity

  if (requestedQuantity > availableQuantity) {
    throw new Error(`Don't have enough quantity.`)
  }

  const result = await OrderModel.create(order)

  product.inventory.quantity -= requestedQuantity

  await product.save()

  return result
}

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find()
  return result
}
const searchOrderByText = async (searchTerm: string) => {
  const result = await OrderModel.find({ email: searchTerm })
  return result
}

export const orderService = {
  createOrderIntoDB,
  getAllOrderFromDB,
  searchOrderByText,
}
