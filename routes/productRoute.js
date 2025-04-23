import express from 'express';
import { getProducts, findProductById, addProduct } from '../controllers/product.js'

const router = express.Router();

// defining routes to get products and add products
router.get('/', getProducts);
router.get('/:id', findProductById);
router.post('/newproduct', addProduct)
export default router
