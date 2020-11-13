import AuthController from '../Controllers/Auth';
import Auth from '../middleware/Auth';
import express from 'express';
const router = express.Router();
router.post('/create', AuthController.createAccount);
router.post('/login', AuthController.login)
export  default router ;