import React from "react";
import { useState, useEffect } from "react";

const initialForm = {
  id: null,
  title: "",
  price: "",
  description: "",
  image: "",
  rating: "",
  stock: "",
  condition: "",
  user: "",
  category: "",
  brand: "",
  ram: "",
  processor: "",
  battery: "",
  bluetooth: "",
};

const FormEditProduct = ({ productEdit,updateProduct }) => {

  const [dataEdit, setDataEdit] = useState(initialForm);
  
  const handleChange = ({ currentTarget: input }) => {
    setDataEdit({ ...dataEdit, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   updateProduct(dataEdit._id,dataEdit)
   setDataEdit(initialForm)
  };

  //mapear productedit

  useEffect(() => {
    if (productEdit) {
      setDataEdit(productEdit);
    } else {
      setDataEdit(initialForm);
    }
  }, [productEdit]);

  return (
    <>
      <h1>Actualizar Productos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Nombre del producto</label>
          <input
            type="title"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={dataEdit.title || ""}
            // required
            // className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="price">Precio del producto</label>
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleChange}
            value={dataEdit.price || ""}
            // required
            // className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="image">Iserte una url de imagen</label>
          <input
            type="text"
            placeholder="image"
            name="image"
            onChange={handleChange}
            value={dataEdit.image || ""}
            // required
            // className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="rating">Califique el producto</label>
          <input
            type="text"
            placeholder="rating"
            name="rating"
            onChange={handleChange}
            value={dataEdit.rating || ""}
            // required
            // className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="text"
            placeholder="stock"
            name="stock"
            onChange={handleChange}
            value={dataEdit.stock || ""}
            // required
            // className={styles.input}
          />
        </div>

        {/* <div>
          <label htmlFor="category">Categoria:</label>
          <input
            type="text"
            placeholder="categoria"
            name="category"
            onChange={handleChange}
            value={dataEdit.category || ""}
            // required
            // className={styles.input}
          />
        </div> */}

        {/* <div>
          <label htmlFor="user">User email:</label>
          <input
            type="text"
            placeholder="Email"
            name="user"
            onChange={handleChange}
            value={dataEdit.user || ""}
            // required
            // className={styles.input}
          />
        </div> */}

        <div>
          <label htmlFor="condition">Condicion:</label>
          <input
            type="text"
            placeholder="condicion"
            name="condition"
            onChange={handleChange}
            value={dataEdit.condition || ""}
            // required
            // className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="bluetooth">Bluetooth:</label>
          <input
            type="text"
            placeholder="bluetooth"
            name="bluetooth"
            onChange={handleChange}
            value={dataEdit.bluetooth || ""}
            // required
            // className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            placeholder="brand"
            name="brand"
            onChange={handleChange}
            value={dataEdit.brand || ""}
            // required
            // className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="ram">Memoria ram:</label>
          <input
            type="text"
            placeholder="ram"
            name="ram"
            onChange={handleChange}
            value={dataEdit.ram || ""}
            // required
            // className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="processor">Procesador:</label>
          <input
            type="text"
            placeholder="processor"
            name="processor"
            onChange={handleChange}
            value={dataEdit.processor || ""}
            // required
            // className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="battery">Bateria:</label>
          <input
            type="text"
            placeholder="battery"
            name="battery"
            onChange={handleChange}
            value={dataEdit.battery || ""}
            // required
            // className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="description">Descripcion:</label>
          <textarea
            name="description"
            rows="5"
            cols="33"
            onChange={handleChange}
            value={dataEdit.description || ""}
          ></textarea>
        </div>

        <div>{<img src={dataEdit.image} width='150px' height='150' alt="imagen" />}</div>
        <button type="submit">UPDATE</button>
      </form>
    </>
  );
};

export default FormEditProduct;
