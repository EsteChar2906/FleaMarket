import React from "react";
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
      <div>
        <label htmlFor="">New-Used</label>
        <select onChange={handleUsed}>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
      </div>
    </div>
  )
}