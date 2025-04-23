import express from 'express';
import { registerUser,loginUser } from "../controllers/login.js"
const router=express.Router()
// defining login and register routes
router.post('/register',registerUser);
router.post('/login',loginUser);

export default router;

