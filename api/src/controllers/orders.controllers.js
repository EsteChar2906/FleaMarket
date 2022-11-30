import Orders from '../models/orders.js';
import Users from '../models/users.js';
import Products from "../models/products.js";
import { send_Mail } from '../nodemailer/mail.js'

export const createOrders = async (req, res) => {
	try{
		
		const { input, data, productsCarrito, prices } = req.body;

		if(input && data && productsCarrito && prices){
			const total = productsCarrito.length;
			const idUser = await Users.find({email: input.email})
			const nombres = productsCarrito.map((p) => p.title)

			if(idUser){
				const newOrder = await new Orders({
					price: prices,
					user: idUser[0]._id,
					product: productsCarrito,
					totalProducts: total,
					via: data.paymentSource,
					status: "Success",
					orderId: data.orderID,
					payerId: data.payerID
				});

				send_Mail(input.email, "orden", input.firstName, input.lastName, nombres);
				newOrder.save()

				res.status(200).send("orden creada")
			}
		}


	} catch(error){
		res.status(500).json({message: error.message})
		console.log(error)
	}
};

export const findOrders = async (req, res) => {
	try{
		const response = await Orders.find()
		.populate('user')

		res.status(200).json(response)
	}catch(error){
		res.status(500).json({message: error.message})
	}
};