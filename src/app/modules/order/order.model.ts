import { Schema, model } from "mongoose"
import { TOrder } from "./order.interface"
import { ProductModel } from "../product/product.model"

export const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  productId: {
    ref: ProductModel,
    type: Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
})

export const OrderModel = model<TOrder>("Order", orderSchema)
