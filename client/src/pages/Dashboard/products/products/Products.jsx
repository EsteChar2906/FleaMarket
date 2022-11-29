import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_DOMINIO } from "../../../../config";
// import styles from "./Products.module.css";
import Table from "../table/Table";
import FormProducts from "../FormProducts";
import FormEditProduct from "../FormEditProduct";
import Modal from "../../../../components/modal/Modal";
import { useModal } from "../../../../Hooks/useModal";

const Products = () => {
  //guarda todos los productos
  const [products, setProducts] = useState([]);

  // use modal
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  // guarda el producto a editar, esta funcion se pasa a cada boton de la tabla.
  const [productEdit, setProductEdit] = useState(null);

  // trae todos los productos y setea el estado de productos
  const getAllProducts = async () => {
    try {
      const url = `${BACK_DOMINIO}/api/productsDashboard`;
      const res = await axios.get(url);
      setProducts(products.concat(res.data));
    } catch (error) {
      return { error: error.message };
    }
  };

  // carga todos los productos
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

  // actualiza un producto
  const updateProduct = async (id, product) => {
    alert("Update?");
    try {
      const res = await axios.put(`${BACK_DOMINIO}/api/product/${id}`, product);
      console.log(res.data);
      setProducts(products.map((p) => (p._id === id ? res.data : p)));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={openModal1}>Agregar un Producto</button>

      <Modal isOpenModal={isOpenModal1} closeModal={closeModal1}>
        <div>
          <FormProducts products={products} setProducts={setProducts} />
        </div>
      </Modal>

      <Modal isOpenModal={isOpenModal2} closeModal={closeModal2}>
        <div>
          <FormEditProduct
            productEdit={productEdit}
            updateProduct={updateProduct}
          />
        </div>
      </Modal>

      <div>
        <Table
          openModal2={openModal2}
          products={products}
          deleteProduct={deleteProduct}
          setProductEdit={setProductEdit}
        />
      </div>
    </div>
  );
};

export default Products;
