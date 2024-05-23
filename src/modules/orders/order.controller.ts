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

const getOrderController = async(req: Request, res: Response)=>{

    const order = await orderServices.getOrder()

    res.json(
        {
            "success": true,
            "message": "Orders fetched successfully!",
            "data": order
        }
    )
}


const getOrderByEmailController = async(req: Request, res: Response)=>{

    const email = req.query.email

    const order = await orderServices.getOrderByEmail(email as string)

    res.json(
        {
            "success": true,
            "message": "Orders fetched successfully for user email!",
            "data": order
        }
    )
}



export const orderController = {
    createOrderController, 
    getOrderController,
    getOrderByEmailController,

}