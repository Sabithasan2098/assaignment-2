import { TOrder } from "./order.interface"
import { OrderModel } from "./order.model"

const createOrderIntoDB = async (order: TOrder) => {
  const result = await OrderModel.create(order)
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
