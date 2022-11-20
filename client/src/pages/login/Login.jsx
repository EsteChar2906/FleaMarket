import React from "react";
import styles from "./login.module.css";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/login";
      const res = await axios.post(url, data);
      localStorage.setItem("user", JSON.stringify(res.data));
      history.push("/home");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <Link to="/home">
        <p>Back to Home</p>
      </Link>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <h1>Login to Your Account</h1>
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
      {error}

      <Link to="/register">
        <h2>New Here?</h2>
        <p>Sing Up</p>
      </Link>
    </div>
  );
};

export default Login;
