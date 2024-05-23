import { z } from "zod"
import { ObjectId } from "mongodb"

const validatedOrder = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  productId: z.string().refine(id => ObjectId.isValid(id), {
    message: "Invalid ObjectId",
  }),

  price: z.number().min(2, {
    message: "The 'price' field must be at least 2 characters long.",
  }),
  quantity: z.number().min(1, {
    message: "The 'quantity' field must be at least 1 characters long.",
  }),
})
export default validatedOrder
