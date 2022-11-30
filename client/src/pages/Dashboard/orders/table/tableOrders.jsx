import React from "react";
import DataTable from "react-data-table-component";
import "style-components";

const TableOrders = ({ orders, deleteOrder, setOrderEdit, openModal2 }) => {

	const columns = [
	{
		name: "ORDERID",
		selector: (row) => row.orderId,
		sortable: true
	},
	{
		name: "PAYERID",
		selector: (row) => row.payerId,
		sortable: true
	},
	{
		name: "USER",
		selector: (row) => row.user.name,
		sortable: true
	},
	{
		name: "PRODUCTS",
		selector: (row) => row.product.map((p) => p.title)
	},
	{
		name: "METODO DE PAGO",
		selector: (row) => row.via,
		sortable: true
	},
	{
		name: "PRICE",
		selector: (row) => row.price,
		sortable: true
	},
	{
		name: "STATUS",
		selector: (row) => row.status,
		sortable: true
	},
	{
		name: "UPDATE",
		grow: 0,
		cell: (row) => <button onClick={() =>{
			const selecRow = setOrderEdit(row)
			const open = openModal2()
			selecRow()
			open()
		}}>UPDATE</button>
	},
	{
		name: "DELETE",
		grow: 0,
		cell: (row) => <button onClick={() => deleteOrder(row._id)}>DELETE</button>
	} 
	]

};