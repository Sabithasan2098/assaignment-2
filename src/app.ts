import cors from "cors"
import express, { Application, Request, Response } from "express"
import { productRoutes } from "./app/modules/product/product.routes"
import { orderRoutes } from "./app/modules/order/order.routes"
const app: Application = express()

// parser--------------------->
app.use(express.json())
app.use(cors())

// create products route---------->
app.use("/api/products", productRoutes)

// create order route------------->
app.use("/api/orders", orderRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

export default app
