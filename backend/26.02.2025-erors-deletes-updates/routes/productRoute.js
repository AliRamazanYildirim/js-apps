import { Router } from "express";

import * as product from '../controllers/produktController.js'

const productRouter = Router();

productRouter.post('/', product.createProduct)
.get('/', product.getAllProducts)
.put('/:id', product.replaceProduct)
.patch('/:id', product.updateProduct)
.patch('/restore/:id', product.restoreProduct)
.delete('/id', product.softDeleteProduct)

export default productRouter;