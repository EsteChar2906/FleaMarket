import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer_contenedor}>
      <div className={styles.footer_general_sections}>
        <section className={styles.container_sections}>
          <section className={styles.sub_sections}>
            <div>
              <h5>Paga con targeta o efectivo</h5>
              <p>
                Con Flea Market pago, contamos con exelentes metodos de pago
                virtuales y efectivo en puntos de pago. !Siempre Seguro!
              </p>
            </div>
          </section>
          <section className={styles.sub_sections}>
            <div>
              <h5>Envios</h5>
              <p>
                Con solo estar registrado en FleaMarket, tienes envíos gratis en
                miles de productos seleccionados.
              </p>
            </div>
          </section>
          <section className={styles.sub_sections}>
            <div>
              <h5>Seguridad de principio a fin </h5>
              <p>
                ¿No te gusta? ¡Devuélvelo! En FleaMarket, no hay nada que no
                puedas hacer, porque estás siempre protegido.
              </p>
            </div>
          </section>
        </section>

        <section className={styles.container_sections}>
          <section className={styles.sub_sections}>
            <div>
              <h5>Acerca de</h5>
              <p>Flea Market</p>
              <p>Investor relations</p>
              <p>Tendencias</p>
              <p>Sustentabilidad</p>
            </div>
          </section>
          <div className={styles.sub_sections}>
            <div>
              <h5>Ayuda/PQR</h5>
              <p>Comprar</p>
              <p>Verder</p>
            </div>
          </div>
          <section className={styles.sub_sections}>
            <div>
              <h5>Redes Sociales</h5>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twiter</p>
            </div>
          </section>
          <section className={styles.sub_sections}>
            <div>
              <h5> Mi cuenta</h5>
              <p>Vender</p>
              <p>Ingresar</p>
            </div>
          </section>
        </section>

        <section className={styles.container_sections}>
          <section className={styles.sub_sections}>
            <div className={styles.section_terminos}>
              <h5>Terminos y condiciones</h5>
              <h5>Flea Market</h5>
            </div>
            <div>
              <h5>Copyrigth@ 2022 FleaMarket</h5>
            </div>
          </section>
        </section>

         
      </div>
    </footer>
  )
}

export default Footer