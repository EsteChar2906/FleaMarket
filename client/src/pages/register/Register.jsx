import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";

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
      <Header></Header>
      <div className={styles.register_containercero}>
        <div className={styles.register_container}>



          <div className={styles.register_welcome} >
            <Link to='/login' style={{textDecoration: "none" } } className={styles.register_welcome_textuno}>
              <h2 className={styles.register_welcome_textuno} >Welcome Back</h2>
            </Link>
    
            <div className={styles.register_welcome_texttres}>
              <Link to='/login' style={{textDecoration: "none" } }>
                <p >Sing in</p>
              </Link>
              <Link to='/' style={{textDecoration: "none" } } >
                <p >Back to Home</p>
              </Link>
            </div>
            
    
          </div>
    
    
          <div className={styles.form_container}>
            <h1 className={styles.form_container_mjs}>Create Account</h1>
            <form className={styles.form_container_formulario} onSubmit={handleSubmit}>
              
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
                type="country"
                placeholder="Country"
                name="country"
                onChange={handleChange}
                value={data.country}
                required
                className={styles.input}
              />
              <input
                type="city"
                placeholder="City"
                name="city"
                onChange={handleChange}
                value={data.city}
                required
                className={styles.input}
              />
              <input
                type="addres"
                placeholder="Addres"
                name="addres"
                onChange={handleChange}
                value={data.addres}
                required
                className={styles.input}
              />
              <input
                type="telephone"
                placeholder="Telephone"
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
  
            </form>
            <button type="submit" className={styles.green_btn}>
                Registrarse
            </button>

        </div>


        {error&&error}







      </div>
    </div>
    </div>
  );
};

export default Register;
