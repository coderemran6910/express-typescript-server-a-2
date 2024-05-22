
import express from 'express'

import { productController } from './product.controller';

const router = express.Router();


router.post('/', productController.createProductController)
router.get('/', productController.getProductController)
router.get('/:productId', productController.getSingleProductController)



export const productRoute = router