import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className={styles.footer_contenedor}>
      <div className={styles.footer_general_sections}>
        <section className={styles.container_sections}>
          <section className={styles.sub_sections}>
            <div>
              <h5>Payment</h5>
              <p>
              With Flea Market payment, we have excellent virtual payment methods. !Always safe!
              </p>
            </div>
          </section>

          <section className={styles.sub_sections}>
            <div>
              <h5>End-to-end security</h5>
              <p>
              At FleaMarket, there is nothing you cannot do, because you are always protected.
              </p>
            </div>
          </section>
          <section className={styles.sub_sections}>
            <div>
              <h5>Terms and Conditions </h5>
              <p> Flea Market</p>
            </div>
          </section>
          <section className={styles.sub_sections}>
            <div>
              <h5> My Account</h5>             
              <Link to="/login" style={{ textDecoration: "none" }} className={styles.ingresar}>Login</Link> 
            </div>
          </section>
          
        </section>

        <section className={styles.sub_sections}>
          <div>
            <h5>Copyrigth@ 2022 FleaMarket</h5>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
