import { TProduct } from "./products.interface"
import { Product } from "./products.model"

const  createProduct = async(payload: TProduct)=>{
    const result = await Product.create(payload)
    return result 

}
const  getProduct = async()=>{
    const result = await Product.find()
    return result 

}

export const productServices = {
    createProduct,
    getProduct
}