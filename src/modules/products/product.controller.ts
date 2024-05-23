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


 const updateProductInfo =  async (req:Request, res:Response) => {
    try {
      const productId = req.params.productId;
      const productData = req.body;
  
      const updatedProduct = await productServices.updateProduct(productId, productData);
  
      res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: updatedProduct
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error updating product" });
    }
  }




  const deleteProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.productId;
  
       await productServices.deleteProduct(productId);
  
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: null
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error deleting product" });
    }
  }

  const productSearchController = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm as string;

        const result = await productServices.productSearch(searchTerm);

        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    } catch (error) {
        console.error('Error searching products:', error); // Log error for debugging
        res.status(500).json({
            success: false,
            message: 'An error occurred while searching for products.',
            error: error,
        });
    }
};


 export const productController = {
    createProductController,
    getProductController,
    getSingleProductController,
    updateProductInfo,
    deleteProduct,
    productSearchController
 }