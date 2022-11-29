import React from "react";
import styles from './Modal.module.css'

const Modal = ({children,isOpenModal,closeModal }) => {
    const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <div>
      <article className={ isOpenModal?styles.modal_is_open: styles.modal} onClick={closeModal}>
        <div className={styles.modal_container}onClick={handleModalContainerClick} >
          <button className={styles.modal_close} onClick={closeModal}>X</button>
          {children}
        </div>
      </article>
    </div>
  );
};

export default Modal;
