import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_DOMINIO } from "../../../../config.js";
import TableOrders from "../table/tableOrders.jsx";

const Orders = () => {

	const [ orders, setOrders ] = useState([])
	const [ orderEdit, setOrderEdit ] = useState(null);
	
	const getAllOrders = async() => {
		const response = await axios.get(`${BACK_DOMINIO}/api/orders`)
		setOrders(response.data)
	}

	useEffect(() => {
		getAllOrders()
	}, [])

	const deleteOrder = async (id) => {
		try{
			alert('are you sure to delete this purchase order?');
			/*await axios.delete(`${BACK_DOMINIO}/api/orders/${id}`);*/
			const newOrders = orders.filter((o) => o._id !== id);
			setOrders(newOrders);
		} catch(error){
			return { error: error.message };
		}
	}

	return (
		<div>
		<TableOrders 
		orders={orders}
		deleteOrder={deleteOrder} 
		/>
		</div>
		)
};

export default Orders;