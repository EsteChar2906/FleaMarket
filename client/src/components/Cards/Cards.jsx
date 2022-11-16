import { useSelector, useDispatch } from "react-redux";
import Card from "./Card.jsx";
import "./Cards.css";
import { loadProducts } from "../../actions/index.js";

import { useEffect, useState } from "react";

import Pagination from "../Pagination/Pagination.jsx";

export default () => {
  const products = useSelector((state) => state.products);
  const filtered = useSelector((state) => state.filtered);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  let lastProductIndex = currentPage * productsPerPage;
  let firstProductIndex = lastProductIndex - productsPerPage;
  let currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const productsToShow = filtered.length === 0 ? currentProducts : filtered;

  const paginado = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        products={products.length}
        paginado={paginado}
      />
      <div className="contenedorCards">
        {productsToShow.map((e, i) => {
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
