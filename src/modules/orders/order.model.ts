import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    productId: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})
0

export const Order = model<TOrder>('Order', orderSchema)