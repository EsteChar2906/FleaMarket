import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./filtCat.module.css";
import {
  filterCategory,
  resetFiltered,
  loadCategories,
} from '../../store/actions/index.js';

const FilterCategory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  if (categories.length === 0) {
    dispatch(loadCategories());
  }

  const handleClick = (category) => {
    if (category === "all") {
      dispatch(resetFiltered());
    } else {
      dispatch(filterCategory(category, products));
    }
  };
  return (
    <div>
      <div className={styles.contenedor_category}>         
          <button className={styles.contenedor_button_all} onClick={() => handleClick("all")} value="All"> All</button>
          {categories.map((c, i) => (
            <button className={styles.contenedor_button_category} key={i} onClick={() => handleClick(c)} value={c} > {c} </button>
          ))}
     </div>      
    </div>
  );
};
export default FilterCategory;
