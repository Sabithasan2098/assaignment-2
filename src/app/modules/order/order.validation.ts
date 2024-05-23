import { z } from "zod"

const validatedOrder = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  productId: z
    .string()
    .min(1, {
      message: "The 'productId' field must be at least 1 characters long.",
    })
    .max(100, { message: "The maximum length for 'productId' is 100." }),
  price: z.number().min(2, {
    message: "The 'price' field must be at least 2 characters long.",
  }),
  quantity: z.number().min(1, {
    message: "The 'quantity' field must be at least 1 characters long.",
  }),
})
export default validatedOrder
