import express from 'express';
import { createOrders, findOrders } from '../controllers/orders.controllers.js';
import {  verifyAdminRole, verifyToken } from "../middleware/auth.middlewares.js";

const router = express();

//me crea una orden el la base de datos si el pago lo hizo un usuario registrado
router.post('/orders', createOrders);

router.get("/orders", findOrders);

export default router;