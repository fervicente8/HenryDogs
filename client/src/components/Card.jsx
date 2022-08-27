import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, min_weight, max_weight, temperament, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgName}>
        <img src={image} alt="Image not found" />
        <h1 className={styles.negro}>{name}</h1>
      </div>
      <div className={styles.contenedor}>
        <div className={styles.cardWeight}>
          <h3>Weight</h3>
          <div className={styles.cardWeightContainer}>
            <div>
              <p>Min:</p>
              <p className={styles.negro}>{min_weight}</p>
            </div>
            <div>
              <p>Max:</p>
              <p className={styles.negro}>{max_weight}</p>
            </div>
          </div>
        </div>
        <div className={styles.cardTemperament}>
          <h3>Temperament</h3>
          <p className={styles.negro}>{temperament}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
