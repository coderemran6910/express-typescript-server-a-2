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

const updateProduct = async (productId: string, productData: object) => {
    try {
        // Ensure the ID is valid if using a database like MongoDB
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { $set: productData },
            { new: true, runValidators: true }
        );

        return updatedProduct;
    } catch (error) {
        console.error('Error in updateProduct:', error);
        throw error;
    }
};

const deleteProduct = async(productId: string)=>{
    try{

        const deleteProduct = await Product.findByIdAndDelete(productId)
        return deleteProduct

    }catch(error){
        console.error(error);
    }


}


const productSearch = async (searchTerm: string) => {
    try {
        const regex = new RegExp(searchTerm, 'i'); // Case-insensitive search
        const products = await Product.find({
            $or: [
                { name: { $regex: regex } },
                { description: { $regex: regex } },
                { category: { $regex: regex } },
                { tags: { $regex: regex } },
            ],
        });
        return products;
    } catch (error) {
        console.error('Error in productSearch:', error);
        throw error;
    }
};



export const productServices = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    productSearch,
}