
import express from 'express'

import { productController } from './product.controller';

const router = express.Router();


router.post('/', productController.createProductController)
router.get('/', productController.getProductController)
router.get('/:productId', productController.getSingleProductController)
router.put('/:productId', productController.updateProductInfo)
// router.delete('/:productId', productController)
// router.get('/:productId', productController)  ///end point: api/products?searchTerm=iphone [Search]



export const productRoute = router