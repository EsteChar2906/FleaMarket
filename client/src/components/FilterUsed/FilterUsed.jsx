import React from "react";
import "./FilterUsed.css"
// import { useDispatch } from "react-redux";
//import filterUsed from [function de la action]

export default function FiltUsed(){

  // const dispatch = useDispatch();
  
  const handleUsed = (e) => {
    e.preventDefault();
    // dispatch(filterUsed()) [remplazar con la function de action]
  }
  return(
    <div>

    
        <select className="contenedorfiltrouser" onChange={handleUsed} >
          <option className="option" value="new">New</option>
          <option className="option"value="used">Used</option>
        </select>

    </div>
  )
}