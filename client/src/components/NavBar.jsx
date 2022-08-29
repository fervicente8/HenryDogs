import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs, getNameDogs } from "../actions";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const allDogs = useSelector((state) => state.allDogs);
  
  useEffect(() => {
    dispatch(getDogs());
  }, []);

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameDogs(name));
  }

  return (
    <div className={styles.contenedorTotal}>
      <h1 className={styles.titulo}>Dogs App</h1>
      <div className={styles.contenedorBusqueda}>
        <div className={styles.busqueda}>
          <button onClick={handleSubmit}>🔍︎</button>
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Search for a breed (Ej. Labrador Retriever)"
          />
        </div>
        <div className={styles.contenedorPosibles}>
          {allDogs?.map((el) => {
            if (
              name.length > 1 &&
              el.name.toLowerCase().includes(name.toLowerCase())
            ) {
              return (
                <Link to={`/home/${el.id}`}>
                  <div className={styles.posible}>
                    <img src={el.image} alt="" />
                    <p>{el.name}</p>
                  </div>
                </Link>
              );
            }
          })
        }
        </div>
      </div>
      <div className={styles.contenedorCrear}>
        <Link to="/createdog">
          <button className={styles.crearPerro}>Create dog</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
