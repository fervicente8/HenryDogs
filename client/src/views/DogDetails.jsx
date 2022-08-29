import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail } from "../actions/index";
import Loading from "./Loading";
import styles from "./DogDetails.module.css";

const DogDetails = (e) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const dogDetails = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetail(e.match.params.id));
    setLoaded(true);
    dispatch(cleanDetail());
  }, []);

  function tempsToString(index) {
    const temps = [];
    for (let i = 0; i < index.length; i++) {
      temps.push(" " + index[i].name);
    }
    return temps.toString().slice(1, undefined);
  }

  if (dogDetails[0] && loaded) {
    return (
      <div className={styles.fondo}>
        <div className={styles.container}>
          <div className={styles.gif}></div>
          <img
            className={styles.fotoPerro}
            src={dogDetails[0].image}
            alt="Image not found"
          />
          <div className={styles.contenedorInfo}>
            <div className={styles.nombrePerro}>
              <h1>{dogDetails[0].name}</h1>
            </div>
            <div className={styles.divisor}>
              <div>
                <h4>Weight</h4>
                <div>
                  <p>Min: {dogDetails[0].min_weight}kg</p>
                  <p>Max: {dogDetails[0].max_weight}kg</p>
                </div>
              </div>
              <div>
                <h4>Height</h4>
                <div>
                  <p>Min: {dogDetails[0].min_height}cm</p>
                  <p>Max: {dogDetails[0].max_height}cm</p>
                </div>
              </div>
            </div>
            <div className={styles.contenedorLifeSpan}>
              <h4>Life span</h4>
              <p>{dogDetails[0].life_span} years</p>
            </div>
            <div className={styles.contenedorTemperament}>
              <h4>Temperament</h4>
              {dogDetails[0].createdInDb ? (
                <p>{tempsToString(dogDetails[0].temperaments)}</p>
              ) : (
                <p>{dogDetails[0].temperament}</p>
              )}
            </div>
          </div>
          <div className={styles.botonVolver}>
            <Link to="/home">
              <button>Go back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default DogDetails;
