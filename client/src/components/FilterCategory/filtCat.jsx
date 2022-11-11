import React from "react";
import {useDispatch, useSelector} from "react-redux";

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
      <div>
        <label >Filtro por Categoria</label>
        <select onChange={handleChange}>
          <option value="Todo">Todo</option>
          <option value="men">men's clothing</option>
          <option value="jewelery">jewelery</option>
        </select>
      </div>
    </div>
  )
}