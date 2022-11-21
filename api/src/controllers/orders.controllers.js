import Orders from '../models/orders.js';
import Users from '../models/users.js';
import Products from "../models/products.js";
import { send_Mail } from '../nodemailer/mail.js'

export const createOrders = async (req, res) => {
	try{
		const newOrder = Orders(req.body);
		newOrder.save();

		res.status(200).json(newOrder)
	} catch(error){
		res.status(500).json({message: error.message})
	}
}