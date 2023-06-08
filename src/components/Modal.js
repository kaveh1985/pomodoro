import React from 'react';
import styles from '../styles/Modal.module.css';

const Modal = ({ isOpen, closeModal }) => {
  return (
    <div className={styles.container}>
       <div className={styles.modal}>
        <h3>First make a todo list and then select it!</h3>
       </div>
    </div>
  );
};

export default Modal;
