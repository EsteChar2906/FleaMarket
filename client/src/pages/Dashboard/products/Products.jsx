import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_DOMINIO } from "../../../config";
// import styles from "./Products.module.css";
import Table from "./Table";
import FormProducts from "./FormProducts";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const url = `${BACK_DOMINIO}/api/productsDashboard`;
      const res = await axios.get(url);
      setProducts(products.concat(res.data));
    } catch (error) {
      return { error: error.message };
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // elimina un producto por id
  const deleteProduct = async (id) => {
    try {
      alert("estas seguro de eliminar este producto?");
      const url = `${BACK_DOMINIO}/api/product/${id}`;
      await axios.delete(url);
      const newListProducts = products.filter((item) => item._id !== id);
      setProducts(newListProducts);
    } catch (error) {
      return { error: error.message };
    }
  };

  const updateProduct = async () => {};

  return (
    <div>
      <div>
        <FormProducts products={products} setProducts={setProducts} />
      </div>

      <div>
        <Table products={products} deleteProduct={deleteProduct} />
      </div>
    </div>
  );
};

export default Products;
