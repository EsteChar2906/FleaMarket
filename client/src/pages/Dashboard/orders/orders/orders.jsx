import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_DOMINIO } from "../../../../config.js";
import TableOrders from "../table/tableOrders.jsx";
import { getOrders } from "../../../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux"
const Orders = () => {

	const [ orderEdit, setOrderEdit ] = useState(null);

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getOrders())
	})

	const orders = useSelector((state) => state.orders)

	const orderState = orders;

	const deleteOrder = async (id) => {
		try{
			alert('are you sure to delete this purchase order?');
			/*await axios.delete(`${BACK_DOMINIO}/api/orders/${id}`);*/
			orderState = orders.filter((o) => o._id !== id);
		} catch(error){
			return { error: error.message };
		}
	}

	return (
		<div>
		<TableOrders 
		orders={orderState}
		deleteOrder={deleteOrder} 
		/>
		</div>
		)
};

export default Orders;