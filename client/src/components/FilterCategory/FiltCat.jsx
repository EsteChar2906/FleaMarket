import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./filtCat.css";
import {
  filterCategory,
  resetFiltered,
  loadCategories,
} from "../../actions/index";

const FilterCategory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  if (categories.length === 0) {
    dispatch(loadCategories());
  }

  const handleClick = (category) => {
    if (category === "all") {
      dispatch(resetFiltered());
    } else {
      dispatch(filterCategory(category, products));
    }
  };
  return (
    <div>
      <div className="contenedorcategorias">
        <div className="contenedorcategorias">
          <button
            onClick={() => handleClick("all")}
            className="optionuno"
            value="All"
          >
            All
          </button>
          {categories.map((c, i) => (
            <button
              key={i}
              onClick={() => handleClick(c)}
              className="optionuno"
              value={c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FilterCategory;
