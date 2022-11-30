import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_DOMINIO } from "../../../../config.js";
import TableCategories from "../table/tableCategories.jsx";

const Categories = () => {

	const [ categories, setCategories ] = useState([]);
	const [ categoryEdit, setCategoryEdit ] = useState(null);

	const getAllCategories = async () => {
		const response = await axios.get(`${BACK_DOMINIO}/api/category`)
		const categoriesAll = response.data.map((c, i) => {
			return {
				_id: c._id,
				name: c.name,
				idC: i
			}
		})
		setCategories(response.data)

	}

	useEffect(() => {
		getAllCategories();
	}, [])

	const deleteCategory = async (id) => {
		try{
			alert('are you sure to delete this category?');

			const newCategories = categories.filter((c) => c._id !== id)
			setCategories(newCategories)
		} catch(error){
			return { error: error.message };
		}
	}

	return (
		<div>
		<TableOrders 
		categories={categories}
		deleteCategory={deleteCategory} 
		/>
		</div>
		)
};

export default Categories;