import React from "react";
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
      </div>
    </div>
  );
};

export default Loading;
