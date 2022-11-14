import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./filtCat.css"

import {filterCategory, resetFiltered} from '../../actions/index';

export default function FilterCategory(){

  const dispatch = useDispatch();
  const filtered = useSelector(state => state.filtered);
  const products = useSelector(state => state.products);
  const categories = useSelector(state => state.categories);
  console.log(categories);

  const handleClick = (category) => {
    console.log(category);
    if(category === "all"){
      dispatch(resetFiltered());
    }else{
      dispatch(filterCategory(category, products));
    }
  }

  return(
    <div>
      <div className="contenedorcategorias">
      
        <div className="contenedorcategorias">
          <button onClick={() => handleClick("all")} className="optionuno"value="All">All</button>
          {categories.map(c => (
            <button onClick={() => handleClick(c)} className="optionuno"value={c}>{c}</button>
          ))}
        </div>
      </div>
    </div>
  )
}