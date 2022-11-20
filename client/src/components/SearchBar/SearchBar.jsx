import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { loadProduct } from "../../actions/index";
import styles from "./SearchBar.module.css"
 

const SearchBar = () => {  
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const history = useHistory();

  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    const prod = products.find(p => p.title === name);
    dispatch(loadProduct(prod.id, products));

    setName('');
    history.push(`/detail/${prod.id}`);
  };

  return (
    <>
      <div className={styles.contenedor_search}>
        <input  className={styles.contenedor_bar_search}
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
          value={name}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}> Search </button>       
      </div>      
    </>
  );
};

 export default SearchBar
 