import cors from "cors"
import express, { Application, Request, Response } from "express"
import { productRoutes } from "./app/modules/product/product.routes"
const app: Application = express()

// parser--------------------->
app.use(express.json())
app.use(cors())

// create student route---------->
app.use("/api/products", productRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

export default app
