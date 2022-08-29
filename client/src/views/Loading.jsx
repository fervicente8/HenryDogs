import React from "react";
import { Link } from 'react-router-dom'
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.contenedorTotal}>
      <div className={styles.contenedor}>
        <div className={styles.gif}></div>
        <div className={styles.cargando}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Link to="/home">
          <p>Something is wrong? Click here</p>
        </Link>
      </div>
    </div>
  );
};

export default Loading;
