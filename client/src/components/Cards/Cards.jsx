import { useSelector, useDispatch } from "react-redux";
import Card from "./Card.jsx";
import "./Cards.css";
import { loadProducts } from "../../actions/index.js";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination.jsx";

export default () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  return (
    <div>
    
      <div className="contenedorCards">
        {products.map((e, i) => {
          return (
            <Card
              key={i}
              title={e.title}
              image={e.image}
              price={e.price}
              id={e.id}
            />
          );
        })}
      </div>
    </div>
  );
};
