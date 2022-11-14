import React from "react";
import "./FilterUsed.css"
// import { useDispatch } from "react-redux";
//import filterUsed from [function de la action]

import {useSelector, useDispatch} from 'react-redux';
import { filterUsed } from "../../actions";

export default function FiltUsed(){

  const dispatch = useDispatch();
  const filtered = useSelector(state => state.filtered);
  const products = useSelector(state => state.products);
  console.log(filtered);
  
  const handleUsed = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    if (filtered.length !== 0) {
      dispatch(filterUsed(e.target.value, filtered));
      return;
    }
    dispatch(filterUsed(e.target.value, products));
    // dispatch(filterUsed()) [remplazar con la function de action]
  }
  return(
    <div>

    
        <select className="contenedorfiltrouser" onChange={handleUsed} >
          <option className="option" value="all">All</option>
          <option className="option" value="Nuevo">New</option>
          <option className="option"value="Usado">Used</option>
        </select>

    </div>
  )
}