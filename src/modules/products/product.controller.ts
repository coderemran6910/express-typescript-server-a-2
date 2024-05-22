import { Request, Response } from "express"
import { productServices } from "./product.services"

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
const getSingleProductController = async(req: Request, res:Response )=>{


    try {
        const { productId } = req.params as { productId: string };
        console.log(productId);
        
        const result = await productServices.getSingleProduct(productId);

        res.json({
            success: true,
            message: ' Single  Product fetched successfully!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching the product.',
            error: error,
        });
    }
 } 


 export const productController = {
    createProductController,
    getProductController,
    getSingleProductController,
 }