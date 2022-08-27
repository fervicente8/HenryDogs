import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Dogs</h1>
      <Link to="/home">
        <button className={styles.boton}>Get in</button>
      </Link>
    </div>
  );
}
