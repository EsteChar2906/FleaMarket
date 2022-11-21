import React from "react";
import styles from "./FilterUsed.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { filterUsed, loadProducts } from '../../store/actions/index.js';

const FiltUsed = () => {
  const dispatch = useDispatch();

  /*const filtered = useSelector(state => state.filtered);
  const products = useSelector(state => state.products);*/
  
  const handleCondition = (e) => {
 /*   if (filtered.length !== 0) {
      console.log(filtered)
      dispatch(filterUsed(e.target.value, filtered));
      return;
    }
    dispatch(filterUsed(e.target.value, products));*/
    e.preventDefault();
    if(e.target.value === "All"){
      dispatch(filterUsed(""))
    } else {
      dispatch(filterUsed(e.target.value))
    }
  }

  return(
    <div>
        <label htmlFor="condition">Filter by condition: </label>
        <select className={styles.contenedor_select_condition} 
        onChange={handleCondition} 
        id="condition"
        >
          <option   value="All">All</option>
          <option   value="Nuevo">New</option>
          <option   value="Usado">Used</option>
        </select>
    </div>
  )
}
export default   FiltUsed;