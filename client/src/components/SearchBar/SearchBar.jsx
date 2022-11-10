import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../actions/index";
 

export  function SearchBar() {  
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductByName(name));
    document.getElementById("search").value = "";
     
  };

  return (
    <>
      <div>
        <input  
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}> Search </button>
      </div>      
    </>
  );
};

 