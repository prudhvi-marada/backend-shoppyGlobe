import express from 'express';
import {addToCart,updateCartItem,removeCartItem} from '../controllers/cart.js'
import verifyAuthor from '../middlewares/middleware.js';
const router = express.Router();
// defining cart routes to add,remove,delete
router.post('/',verifyAuthor,  addToCart);
router.put('/:productId',verifyAuthor, updateCartItem);
router.delete('/:productId',verifyAuthor, removeCartItem);

export  default router;
