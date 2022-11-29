import Orders from '../models/orders.js';
import Users from '../models/users.js';
import Products from "../models/products.js";
import { send_Mail } from '../nodemailer/mail.js'

export const createOrders = async (req, res) => {
	try{
		
		const { input, data } = req.body;
		console.log(data)

		const total = input.carrito.length;

		const idUser = await Users.find({email: input.email})

		const nombres = carrito.map((p) => p.title)
		
		if(idUser){
		const newOrder = await new Orders({
			user: 
			price: input.price, 
			product: input.carrito,
			totalProducts: total,
			via: data.paymentSource,
			status: "Success",
			orderId: data.orderID,
			payerId: data.payerID
		});

		send_Mail(email, "orden", firstname, lastName);

		newOrder.save()
		}

	} catch(error){
		res.status(500).json({message: error.message})
	}
};

export const findOrders = async (req, res) => {
	try{
		const response = await Orders.find()

		res.status(200).json(response)
	}catch(error){
		res.status(500).json({message: error.message})
	}
};