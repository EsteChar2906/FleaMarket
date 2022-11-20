import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import FiltUsed from "../FilterUsed/FilterUsed";
import FilterCategory from "../FilterCategory/FiltCat";
import styles from "./Header.module.css";
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
    window.location.reload();
  };

  return (
    <header className={styles.header_contenedor}>
      <section>
        <div>
          <Link to="/">
            <img className="logonav" alt="" />
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <img className="logocarrito" alt="" />
        </div>

        {user ? (
          <>
            <div>
              <p style={{ color: "red" }} onClick={handleLogout}>
                Logout
              </p>
            </div>
            <div>
              <Link to="/profile">
                <p>profile</p>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/register">
                <p>Register</p>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <p>Login</p>
              </Link>
            </div>
          </>
        )}
      </section>
      <section>
        <FiltUsed />
        <FilterCategory />
      </section>
    </header>
  );
};

export default Header;
