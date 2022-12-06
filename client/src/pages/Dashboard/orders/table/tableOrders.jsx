import React from "react";
import DataTable from "react-data-table-component";
import s from './tableOrders.module.css'

const TableOrders = ({ orders, deleteOrder, setOrderEdit }) => {

	const columns = [
	{
		name: "ORDERID",
		selector: (row) => row.orderId,
		sortable: true,
		grow: 0,
	
	},
	{
		name: "PAYERID",
		selector: (row) => row.payerId,
		sortable: true,
		grow: 0,
	},
	{
		name: "E-MAIL",
		selector: (row) => row.user.email,
		grow: 0,
	},
	{
		name: "PRODUCTS",
		selector: (row) => row.product.map((p) => p.title),
		grow: 0.5,
	},
	{
		name: "METODO DE PAGO",
		selector: (row) => row.via,
		sortable: true,
		grow: 0,
	},
	{
		name: "PRICE",
		selector: (row) => row.price,
		sortable: true,
		grow: 0,
	},
	{
		name: "STATUS",
		selector: (row) => row.status,
		sortable: true,
		grow: 0,
	},
	/*{
		name: "UPDATE",
		grow: 0,
		cell: (row) => <button onClick={() =>{
			const selecRow = setOrderEdit(row)
			const open = openModal2()
			selecRow()
			open()
		}}>UPDATE</button>
	},*/
	{
		name: "DELETE",
		grow: 0,
		cell: (row) => <button className={s.delete} onClick={() => deleteOrder(row._id)}>DELETE</button>
	}
	];

	return (
		<>
		<DataTable 
		  columns={columns}
		  data={orders}
		  title="List of Orders in FleaMarket"
		  pagination
		  fixedHeader
		  fixedHeaderScrollHeight="400px"
		/>
		</>
		);

};

export default TableOrders;