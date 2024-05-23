import { TOrder } from "./order.interface"
import { Order } from "./order.model"

const creatOrder = async(payload: TOrder) => {

    const result = await Order.create(payload)
    return result
}
const getOrder = async() => {

    const result = await Order.find()
    return result
}
const getOrderByEmail = async(email: string) => {

    const result = await Order.find({email})
    return result
}

export const orderServices = {
    creatOrder,
    getOrder,
    getOrderByEmail
}