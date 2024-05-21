import { Request, Response } from "express"
import { productServices } from "./products/product.services"

const createProductController = async(req: Request, res:Response )=>{

    const productData = req.body
    const result = await productServices.createProduct(productData)
 
    res.json({
     success: true,
     message: 'Product created successfully!',
     data: result
    })
 } 
const getProductController = async(req: Request, res:Response )=>{

   
    const result = await productServices.getProduct()
 
    res.json({
     success: true,
     message: 'Products fetched successfully!',
     data: result
    })
 } 


 export const productController = {
    createProductController,
    getProductController
 }