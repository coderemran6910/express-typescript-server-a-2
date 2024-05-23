import { Request, Response } from "express";
import { orderServices } from "./order.services";

const createOrderController = async(req: Request, res: Response)=>{

    const orderData = req.body


    const order = await orderServices.creatOrder(orderData)

    res.json(
        {
            "success": true,
            "message": "Order created successfully!",
            "data": order
        }
    )
}



export const orderController = {
    createOrderController, 

}