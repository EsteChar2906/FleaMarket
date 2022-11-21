import mongoose from 'mongoose';
import Users from './users.js';
import Products from './products.js'

const orderschema = new mongoose.Schema({
	amount: {type: Number, required: true},
	user: {
		type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: Users
	},
	product: {
		type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: Products
	},
	address: {type: String, requires: true},
	status: {type: String, default: "pending"}

})

export default mongoose.model("Orders", orderschema);