import React, { useContext } from "react";
import styles from "./login.module.css";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/authContex";
import "./login.module.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { setAuth } = useContext(AuthContext);
  const history = useHistory();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/login";
      const res = await axios.post(url, data);
      localStorage.setItem("user", JSON.stringify(res.data));
      setAuth(data);
      history.push("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className={styles.login_containercero}>
      <div className={styles.login_container}>
        <div className={styles.login_singup}>
          <Link
            to="/register"
            style={{ textDecoration: "none" }}
            className={styles.login_welcome_textuno}
          >
            <h2 className={styles.login_welcome_textuno}>New Here?</h2>
          </Link>
          <div className={styles.login_welcome_texttres}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>Back to Home</p>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <p>Sing up</p>
            </Link>
          </div>
        </div>

        <div className={styles.form_containercero}>
          <h1 className={styles.form_container_mjs}>Login to Your Account</h1>
          <form
            className={styles.form_container_formulario}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />

            <button type="submit" className={styles.green_btn}>
              Sing In
            </button>
          </form>
        </div>

        {error}
      </div>
    </div>
  );
};

export default Login;
