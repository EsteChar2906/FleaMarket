import React from "react";
import DataTable from "react-data-table-component";
import s from './tableCategories.module.css'

const TableCategories = ({ categories, deleteCategory, setCategoryEdit }) => {

	const columns = [
	{
		name: "ID",
		selector: (row) => row.idC,
		sortable: true
	},
	{
		name: "CATEGORY",
		selector: (row) => row.name,
		sortable: true
	},
	/*{
		name: "UPDATE",
		grow: 0,
		cell: (row) => <button onClick={() =>{ 
			const selectRow = setCategoryEdit(row)
			const open = openModal2()
			selectRow()
			open()
		}}>UPDATE</button>
	},*/
	{
		name: "DELETE",
		grow: 0,
		cell: (row) => <button className={s.delete} onClick={() => deleteCategory(row._id)}>DELETE</button>
	},
	];

	return (
		<>
		<DataTable 
		columns={columns}
		data={categories}
		title="List of Categories"
		pagination
		fixedHeader
		fixedHeaderScrollHeight="600px"
		/>
		</>
		)
};

export default TableCategories;