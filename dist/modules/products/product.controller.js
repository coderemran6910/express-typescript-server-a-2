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
exports.productController = void 0;
const product_services_1 = require("./product.services");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield product_services_1.productServices.createProduct(productData);
    res.json({
        success: true,
        message: 'Product created successfully!',
        data: result
    });
});
const getProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_services_1.productServices.getProduct();
    res.json({
        success: true,
        message: 'Products fetched successfully!',
        data: result
    });
});
const getSingleProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        // console.log(productId);
        const result = yield product_services_1.productServices.getSingleProduct(productId);
        res.json({
            success: true,
            message: ' Single  Product fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching the product.',
            error: error,
        });
    }
});
const updateProductInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const updatedProduct = yield product_services_1.productServices.updateProduct(productId, productData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: updatedProduct
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error updating product" });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        yield product_services_1.productServices.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error deleting product" });
    }
});
const productSearchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_services_1.productServices.productSearch(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    }
    catch (error) {
        console.error('Error searching products:', error); // Log error for debugging
        res.status(500).json({
            success: false,
            message: 'An error occurred while searching for products.',
            error: error,
        });
    }
});
exports.productController = {
    createProductController,
    getProductController,
    getSingleProductController,
    updateProductInfo,
    deleteProduct,
    productSearchController
};
