import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    country: "",
    city: "",
    addres: "",
    telephone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/register";
      const formPost = await axios.post(url, data);
      console.log(formPost)
      history.push("/login");
      setData({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        country: "",
        city: "",
        addres: "",
        telephone: "",
        password: "",
      });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
       <Link to='/home'>
      <p>Back to Home</p>
      </Link>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          onChange={handleChange}
          value={data.firstname}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          onChange={handleChange}
          value={data.lastname}
          required
          className={styles.input}
        />

        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={data.username}
          required
          className={styles.input}
        />

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
          type="country"
          placeholder="country"
          name="country"
          onChange={handleChange}
          value={data.country}
          required
          className={styles.input}
        />

        <input
          type="city"
          placeholder="city"
          name="city"
          onChange={handleChange}
          value={data.city}
          required
          className={styles.input}
        />

        <input
          type="addres"
          placeholder="addres"
          name="addres"
          onChange={handleChange}
          value={data.addres}
          required
          className={styles.input}
        />

        <input
          type="telephone"
          placeholder="telephone"
          name="telephone"
          onChange={handleChange}
          value={data.telephone}
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
          Registrarse
        </button>
      </form>

      {error&&error}

      <Link to='/login'>
      <h2>Welcome Back</h2>
      <p>Sing in</p>
      </Link>
    </div>
  );
};

export default Register;
