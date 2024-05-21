
import express, { Request, Response } from 'express'
import { Product } from './products.model';
import { productController } from '../product.controller';

const router = express.Router();


router.post('/', productController.createProductController)
router.get('/', productController.getProductController)



export const productRoute = router