import express from "express";
import { orderController } from "./order.controller";

const router = express.Router();


router.post("/", orderController.createOrderController) 
router.get("/", orderController.getOrderController) 
router.get("/:email", orderController.getOrderByEmailController) 


export const orderRoute = router