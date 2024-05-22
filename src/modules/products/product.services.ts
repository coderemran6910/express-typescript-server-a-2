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

const  getSingleProduct = async(productId: string)=>{

    const result = await Product.findOne({_id : productId})
    return result 

}

export const productServices = {
    createProduct,
    getProduct,
    getSingleProduct
}