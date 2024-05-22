import { z } from "zod"

const validateVariants = z.object({
  type: z
    .string()
    .min(2, {
      message: "The 'type' field must be at least 2 characters long.",
    })
    .trim()
    .refine(value => /^[A-Z]/.test(value), {
      message: "First name must start with a capital letter",
    }),
  value: z
    .string()
    .min(2, {
      message: "The 'value' field must be at least 2 characters long.",
    })
    .trim(),
})

const validateInventory = z.object({
  quantity: z.number().min(1, {
    message: "The 'quantity' field must be at least 1 characters long.",
  }),
  inStock: z.boolean().default(true),
})

const validateProduct = z.object({
  id: z
    .string()
    .min(1, { message: "The 'id' field must be at least 1 characters long." })
    .max(100, { message: "The maximum length for 'id' is 100." }),
  name: z
    .string()
    .trim()
    .min(5, {
      message: "The 'name' field must be at least 5 characters long.",
    })
    .max(30, { message: "The maximum length for 'name' is 30." }),
  description: z
    .string()
    .trim()
    .min(10, {
      message: "The 'description' field must be at least 10 characters long.",
    })
    .max(150, { message: "The maximum length for 'description' is 150." }),
  price: z.number().min(3, {
    message: "The 'price' field must be at least 3 characters long.",
  }),
  category: z
    .string()
    .min(5, {
      message: "The 'category' field must be at least 5 characters long.",
    })
    .max(30, { message: "The maximum length for 'category' is 30." }),
  tags: z.array(z.string()).length(3),
  variants: z.array(validateVariants),
  inventory: validateInventory,
})
export default validateProduct
