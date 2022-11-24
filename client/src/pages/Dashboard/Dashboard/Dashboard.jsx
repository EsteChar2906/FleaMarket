import React from "react";
import { Link, Route } from "react-router-dom";
import Users from "../users/Users";
import Products from "../products/Products";
import Categories from "../categories/Categories";
import Orders from "../orders/Orders";
import styles from "../Dashboard/Dashboard.module.css"


const Dashboard = () => {
  return (
    <div >
      <header className={styles.header}>
        <nav>
          <ul className={styles.ul}>
            <li>logo</li>
            <li>xxx@hotmail.com</li>
            <li>Profile</li>
            <li>back to home</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main} >
        <aside className={styles.aside}>
          <Link to="/users">
            <h1>users</h1>
          </Link>
          <Link to="/products">
            <h1>products</h1>
          </Link>
          <Link to="/orders">
            <h1>orders</h1>
          </Link>
          <Link to="/categories">
            <h1>categories</h1>
          </Link>
        </aside>
        <section>
          <Route exact path="/users" component={Users} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/categories" component={Categories} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
