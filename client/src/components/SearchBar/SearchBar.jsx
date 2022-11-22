import { useDispatch } from "react-redux";
import { getProductName } from "../../store/actions/index.js";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(getProductName(e.target.value));
  };

  return (
    <>
      <div >
        <input
          className={styles.contenedor_bar_search}
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
        />
        <button className={styles.contenedor_search_button} type="submit">
          {" "}
          Search{" "}
        </button>
      </div>
    </>
  );
};

export default SearchBar;
