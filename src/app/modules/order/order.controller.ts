import { Request, Response } from "express"
import validatedOrder from "./order.validation"
import { orderService } from "./order.service"

// post a product--------------------------------------->
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { order } = req.body
    const validateOrderWithZod = validatedOrder.parse(order)
    const result = await orderService.createOrderIntoDB(validateOrderWithZod)
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    })
  }
}
// ----------------------------------------------------//
// get all product-------------------------------------->
export const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrderFromDB()
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    })
  }
}

// ---------------------------------------------------//
// search a order use email as a searchTerm------------>
export const searchOrder = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query
    const result = await orderService.searchOrderByText(searchTerm as string)
    res.status(200).json({
      success: true,
      message: "Orders matching search term 'iphone' fetched successfully!",
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    })
  }
}
// ---------------------------------------------------//
