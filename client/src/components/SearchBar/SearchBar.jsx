import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getProductName } from '../../store/actions/index.js';
import styles from "./SearchBar.module.css"

const SearchBar = () => {  
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const history = useHistory();

  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    /*const prod = products.find(p => p.title === e.target.value);*/
    dispatch(getProductName(e.target.value));
    
  };
  
/*  
  const handleSubmit = (e) => {
    const prod = products.find(p => p.title === name);
    dispatch(getProductName(e.target.value));

    setName('');
    history.push(`/detail/${prod.id}`);
  };*/

  return (
    <>
      <div className={styles.contenedor_search}>
        <input  className={styles.contenedor_bar_search}
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
        />
        <button className={styles.contenedor_search_button} type="submit" > Search  </button>       
      </div>      
    </>
  );
};

 export default SearchBar
 