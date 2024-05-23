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
exports.orderController = void 0;
const order_services_1 = require("./order.services");
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    const order = yield order_services_1.orderServices.creatOrder(orderData);
    res.json({
        "success": true,
        "message": "Order created successfully!",
        "data": order
    });
});
const getOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_services_1.orderServices.getOrder();
    res.json({
        "success": true,
        "message": "Orders fetched successfully!",
        "data": order
    });
});
const getOrderByEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const order = yield order_services_1.orderServices.getOrderByEmail(email);
    res.json({
        "success": true,
        "message": "Orders fetched successfully for user email!",
        "data": order
    });
});
exports.orderController = {
    createOrderController,
    getOrderController,
    getOrderByEmailController,
};
