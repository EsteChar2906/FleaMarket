import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FiltUsed from "../FilterUsed/FilterUsed.jsx";
import FilterCategory from "../FilterCategory/FiltCat.jsx";
import Sort from "../Sort/Sort.jsx";
import styles from "./Header.module.css";
import fm from "../../assets/fm.png";
import car from "../../assets/carrito.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLocalStorageJSON = window.localStorage.getItem("user");
    if (userLocalStorageJSON) {
      const user = JSON.parse(userLocalStorageJSON);
      setUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className={styles.container}>
      <div className={styles.container_position}>
        <section className={styles.section_navbar}>
          <div className={styles.container_logo_and_title}>
            <div>
              <Link to="/">
                <img className={styles.logo} src={fm} />
              </Link>
            </div>
            <div>
              <h1 className={styles.title}> FleaMarket </h1>
            </div>
          </div>

          <div>
            <SearchBar />
          </div>

          <div>
            <Link to="/shoping">
              <img className={styles.shoping_car} src={car} />{" "}
            </Link>
          </div>

          <div className={styles.container_links}>
            {user ? (
              <>
                <div>
                  <button className={styles.header_btns} onClick={handleLogout}>
                    Logout
                  </button>
                </div>
                <div>
                  <Link to="/profile">
                    <button className={styles.header_btns}>profile</button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link to="/register">
                    <button className={styles.header_btns}>Register </button>
                  </Link>
                </div>
                <div>
                  <Link to="/login">
                    <button className={styles.header_btns}>Login </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </div>

      <section className={styles.section_filters}>
        <div className={styles.sections_position}>
          <div>
            <FilterCategory />
          </div>
          <div>
            <FiltUsed />
          </div>
          <div>
            <Sort />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
