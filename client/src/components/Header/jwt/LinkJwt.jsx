import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkJwt.module.css";
import  AuthContext  from "../../../context/authProvider";
import login from  "../../../assets/login.png"
import register from  "../../../assets/register.png"

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
              <button className={styles.header_btns}>
              <img className={styles.logo_profile} src={login} />
              </button>
            </Link>
          </>
        ) : (
          <div className={styles.container_register_login}>
            <div>
              <Link to="/register">
              <button className={styles.header_btns}>
              <img className={styles.logo_register} src={register} /></button>              
            </Link>
            </div>
            <div>Register </div>
             <div><Link to="/login">
              <button className={styles.header_btns}>
              <img className={styles.logo_profile} src={login} /> </button>
            </Link>
            </div>
            <div>Login</div>

            
          </div>
        )
      }
    </>
  );
};

export default LinkJwt;
