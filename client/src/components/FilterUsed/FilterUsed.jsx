import React from "react";
import styles from "./FilterUsed.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { filterUsed } from "../../actions/index.js";

const FiltUsed =()=> {
  const dispatch = useDispatch();

  const filtered = useSelector(state => state.filtered);
  const products = useSelector(state => state.products);
  
  const handleUsed = (e) => {
    if (filtered.length !== 0) {
      dispatch(filterUsed(e.target.value, filtered));
      return;
    }
    dispatch(filterUsed(e.target.value, products));
  }

  return(
    <div>
        <select className={styles.contenedor_select_condition} onChange={handleUsed} >
          <option   value="all">All</option>
          <option   value="Nuevo">New</option>
          <option   value="Usado">Used</option>
        </select>
    </div>
  )
}
export default   FiltUsed;