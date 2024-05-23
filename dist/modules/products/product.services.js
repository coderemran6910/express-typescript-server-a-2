"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const products_model_1 = require("./products.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.create(payload);
    return result;
});
const getProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.find();
    return result;
});
const getSingleProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findOne({ _id: productId });
    return result;
});
const updateProduct = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Ensure the ID is valid if using a database like MongoDB
        const updatedProduct = yield products_model_1.Product.findByIdAndUpdate(productId, { $set: productData }, { new: true, runValidators: true });
        return updatedProduct;
    }
    catch (error) {
        console.error('Error in updateProduct:', error);
        throw error;
    }
});
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteProduct = yield products_model_1.Product.findByIdAndDelete(productId);
        return deleteProduct;
    }
    catch (error) {
        console.error(error);
    }
});
const productSearch = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regex = new RegExp(searchTerm, 'i'); // Case-insensitive search
        const products = yield products_model_1.Product.find({
            $or: [
                { name: { $regex: regex } },
                { description: { $regex: regex } },
                { category: { $regex: regex } },
                { tags: { $regex: regex } },
            ],
        });
        return products;
    }
    catch (error) {
        console.error('Error in productSearch:', error);
        throw error;
    }
});
exports.productServices = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    productSearch,
};
