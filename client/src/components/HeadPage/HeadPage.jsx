import React from "react";
import logo from "../../assets/fm.png";
import styles from "./HeadPage.module.css";
import { Link } from "react-router-dom";

const HeadPage = () => {
  return (
    <section className={styles.header_container}>
     <div className={styles.header_container_position}>
     <div className={styles.header_container_logo_title}>
        <div>
          <Link to="/">
            <img className={styles.logo} src={logo} />
          </Link>
        </div>
        <h2 className={styles.title}>FleaMarket</h2>
      </div>

      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className={styles.link_home}>Back</p>
        </Link>
      </div>
     </div>
    </section>
  );
};

export default HeadPage;
