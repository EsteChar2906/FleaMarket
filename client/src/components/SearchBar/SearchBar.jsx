import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { loadProduct } from "../../actions/index";
import "./SearchBar.css"
 

export  function SearchBar() {  
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const history = useHistory();

  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    const prod = products.find(p => p.title === name);
    dispatch(loadProduct(prod.id, products));

    setName('');
    history.push(`/detail/${prod.id}`);
  };

  return (
    <>
      <div className="contenedorsearch">
        <input  className="searcher"
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
          value={name}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}> Search </button>
        <Link to="/shoping">
          <p>carrito</p>
        </Link>
      </div>      
    </>
  );
};

 