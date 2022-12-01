import React from "react";
import { Link, Route } from "react-router-dom";
import Users from "../users/Users";

import Admin from "../AdminDash/AdminDash";

import Products from "../products/products/Products";

import Categories from "../categories/categories/categories.jsx";
import Orders from "../orders/orders/orders.jsx";
import styles from "../Dashboard/Dashboard.module.css"
import Profile from "../profile/Profile";
import logousers from "../../../assets/users.png"
import logoprofile from "../../../assets/profile.png"
import profilegeneral from "../../../assets/login.png"
import email from "../../../assets/email.png"
import products from "../../../assets/products.png"
import categories from "../../../assets/categories.png"
import order from "../../../assets/order.png"
import estadisticas from "../../../assets/estadisticas.png"
import fm from "../../../assets/fm.png"

const Dashboard = () => {
  return (
    <div className={styles.container} >
      <header className={styles.header}>      
          <section className={styles.container_logo_flemarket}>
            <div className={styles.container_div}>
              <div><Link to="/"><img className={styles.logo_flemarket} alt="logo" src={fm} /></Link></div>
              <div><h1 className={styles.title_flemarket}> FleaMarket </h1></div>
            </div>
         </section>
          <section className={styles.container_perfil_bar}>
            <div className={styles.container_div}>
                <img className={styles.logo_email} src={email}/>
                <a className={styles.labels}> xxx@hotmail.com</a>
            </div>
            <div className={styles.container_div}>
               <div className={styles.header_div_profile}>
                 <Link to="/profile" style={{ textDecoration: "none" }}><img className={styles.logo_users} src={profilegeneral}/></Link>
                 <Link to="/profile"style={{ textDecoration: "none" }}><label  className={styles.labels}>Profile</label></Link>
               </div>               
            </div> 
            <div className={styles.container_div}>
              <Link className={styles.labels} to="/" style={{ textDecoration: "none" }}>Back to Home</Link>
            </div>    
          </section>     
      </header>

      <main className={styles.main} >
        <aside className={styles.aside}>

          <div className={styles.asides_div}>
          <Link to="/admin" style={{ textDecoration: "none" }}><img className={styles.logo_users} src={estadisticas}/></Link>
              <Link to="/admin" style={{ textDecoration: "none" }}><label  className={styles.aside_labels}>Dashboard</label></Link>
          </div> 
           <div className={styles.asides_div}>
            <Link to="/users" style={{ textDecoration: "none" }}><img className={styles.logo_users} src={logousers}/></Link>
            <Link to="/users" style={{ textDecoration: "none" }}><label  className={styles.aside_labels}>Users</label></Link>
          </div>
          <div className={styles.asides_div}>
            <Link to="/products"><img className={styles.logo_users} src={products}/></Link>
            <Link to="/products" style={{ textDecoration: "none" }}><label className={styles.aside_labels}>Products</label></Link>
          </div>
          <div className={styles.asides_div}>
            <Link  to="/orders" style={{ textDecoration: "none" }}><img className={styles.logo_users} src={order}/></Link>
            <Link to="/orders" style={{ textDecoration: "none" }} className={styles.aside_labels}> orders </Link>
          </div>
          <div className={styles.asides_div}>
            <Link to="/categories" style={{ textDecoration: "none" }}><img className={styles.logo_users} src={categories}/></Link>
            <Link to="/categories" style={{ textDecoration: "none" }} className={styles.aside_labels}> categories </Link>
          </div>
          <div className={styles.asides_div}>
            <Link to="/upDateProfile" style={{ textDecoration: "none" }}><img className={styles.logo_users} src={logoprofile}/></Link>
            <Link to="/upDateProfile" style={{ textDecoration: "none" }}><label  className={styles.aside_labels}>Profile</label></Link>
          </div> 
        </aside>

        <section className={styles.section}>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/users" component={Users} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/upDateProfile" component={Profile} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
