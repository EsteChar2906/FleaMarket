import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import styles from "./LinkAuth0.module.css";

const LinkAuth0 = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <>
      {
        // autenticacion con auth0
        isAuthenticated ? (
          <>
            <button className={styles.header_btns} onClick={logout}>
              Logout
            </button>

            <Link to="/profile">
              <button className={styles.header_btns}>profile</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className={styles.header_btns}>Register </button>
            </Link>

            <Link to="/login">
              <button className={styles.header_btns}>Login </button>
            </Link>
          </>
        )
      }
    </>
  );
};

export default LinkAuth0;
