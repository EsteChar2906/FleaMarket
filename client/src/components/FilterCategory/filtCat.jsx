import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./filtCat.css"

import {filterCategory, resetFiltered} from '../../actions/index';

export default function FilterCategory(){

  const dispatch = useDispatch();
  const filtered = useSelector(state => state.filtered);
  const products = useSelector(state => state.products);

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
          <button onClick={() => handleClick("men's clothing")} className="option"value="men">Clothing</button>
          <button onClick={() => handleClick("jewelery")} className="option"value="jewelery">Jewelery</button> 
        </div>
      </div>
    </div>
  )
}