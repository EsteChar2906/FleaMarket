import React from "react";
import DataTable from "react-data-table-component";

const TableOrders = ({ orders, deleteOrder, setOrderEdit }) => {

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
		name: "E-MAIL",
		selector: (row) => row.user.email
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
		cell: (row) => <button onClick={() => deleteOrder(row._id)}>DELETE</button>
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
		  fixedHeaderScrollHeight="600px"
		/>
		</>
		);

};

export default TableOrders;