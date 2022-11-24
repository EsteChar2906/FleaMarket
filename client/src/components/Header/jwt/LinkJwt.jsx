import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkJwt.module.css";
import  AuthContext  from "../../../context/authProvider";

const LinkJwt = () => {

  const { userStorage, handleLogout } = useContext(AuthContext);

  return (
    <>
      {
        // autenticacion con jwt
        userStorage ? (
          <>
            <button className={styles.header_btns} onClick={handleLogout}>
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

export default LinkJwt;
