import express from 'express';
import { createPayment } from '../controllers/payment.controllers.js'

const router = express();

router.post("/payment", createPayment);

export default router;