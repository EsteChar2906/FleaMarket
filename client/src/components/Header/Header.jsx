import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FiltUsed from "../FilterUsed/FilterUsed.jsx";
import FilterCategory from "../FilterCategory/FiltCat.jsx";
import Sort from "../Sort/Sort.jsx"
import styles from "./Header.module.css";
import fm from "../../assets/fm.png"
import car from "../../assets/carrito.png"
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
    // window.location.reload();
    setUser(null)
  };


  return (
    <header className={styles.header_contenedor}>
      <section className={styles.header_section_one}>
        <div className={styles.header_section_title_logo}>
          <div>
            <Link to="/">
            <img className={styles.logo_fm}src={fm} />
          </Link>
          </div>          
          <div className={styles.header_section_title}>
            FleaMarket 
          </div>          
        </div>
        <div>
          <SearchBar />
        </div>
        <div className={styles.header_section_one_car}>
                <Link to="/shoping">
                  <p ><img className={styles.icon_car} src={car}/> </p>
                </Link>
              </div>
        <div className={styles.header_div_logout_profile}>
          {user ? (
            <>
              
              <div >
                <button className={styles.header_btns} onClick={handleLogout}>
                  Logout
                </button>
              </div>
              <div >
                <Link to="/profile">
                  <button className={styles.header_btns} >profile</button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div >
                <Link to="/register">
                 <button className={styles.header_btns}>Register </button>
                </Link>
              </div>
              <div >
                <Link to="/login">
                   <button className={styles.header_btns} >Login </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
      <section className={styles.header_section_filters}>
        <div>
          <FilterCategory />
        </div>
        <div>
          <FiltUsed />
        </div>
        <div>
          <Sort />
        </div>
      </section>
    </header>
  );
};

export default Header;
