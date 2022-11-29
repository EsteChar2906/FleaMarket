import mongoose, { Schema } from 'mongoose';
import users from './users.js';

const orderschema = new mongoose.Schema({
	price: {
		type: Number, 
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
        require: true,
        ref: users
	},
	product: {
		type: Array,
        require: true
	},
	totalProducts: {
		type: Number
	},
	via: {
		type: String, 
		require: true
	},
	status: {
		type: String, 
		required: true
	},
	orderId: {
		type: String,
		require: true
	},
	payerId: {
		type: String,
		require: true
	}
})

export default mongoose.model("Orders", orderschema);