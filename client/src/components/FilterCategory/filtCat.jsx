import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./filtCat.css"

export default function FilterCategory(){

  // const dispatch = useDispatch();
  

  const handleChange = (e) => {
    e.preventDefault()
    if(e.target.value === "Todo"){
      //dispatch(getProducts()); [remplazar el nombre de la funcion];
    }else{
      //dispatch(filterCategory(e.target.value)); [remplazar el nombre de la funcion]
    }
  }

  return(
    <div>
      <div className="contenedorcategorias">
      
        <div className="contenedorcategorias" onChange={handleChange}>
          <option className="optionuno"value="All">All</option>
          <option className="option"value="men">Clothing</option>
          <option className="option"value="jewelery">Jewelery</option> 
          <option className="option"value="jewelery">Accessories</option>
        </div>
      </div>
    </div>
  )
}