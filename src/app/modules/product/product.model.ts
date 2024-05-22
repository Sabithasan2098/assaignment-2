import { Schema, model } from "mongoose"
import { TInventory, TProduct, TVariants } from "./product.interface"

const variantsSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
})

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
})

export const productSchema = new Schema<TProduct>({
  id: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String, String, String],
    required: true,
  },
  variants: {
    type: [variantsSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

// don't show data which isDeleted field is true------------->
productSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})
productSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})
productSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
  next()
})

export const ProductModel = model<TProduct>("Product", productSchema)
