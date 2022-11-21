import express from 'express';
import { createOrders } from '../controllers/orders.controllers.js';
import {  verifyAdminRole, verifyToken } from "../middleware/auth.middlewares.js";

const router = express();

//me crea una orden el la base de datos si el pago lo hizo un usuario registrado
router.post('/orders', verifyToken, createOrders);

export default router;