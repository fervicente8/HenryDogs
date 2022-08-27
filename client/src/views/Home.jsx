import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperaments,
  filterDogByTemperaments,
  filterDogByCreated,
  orderByName,
  orderByWeight,
} from "../actions";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Pages from "../components/Pages";
import Loading from "./Loading";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.temperaments);
  const [loaded, setLoaded] = useState();
  const [orden, setOrden] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;
  const lastDog = currentPage * dogsPerPage;
  const firstDog = lastDog - dogsPerPage;
  const currentDogs = allDogs.slice(firstDog, lastDog);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
    setLoaded(true);
  }, [dispatch]);

  function handleRestart(e) {
    e.preventDefault();
    dispatch(getDogs());
    setCurrentPage(1);
  }

  function handleFilterTemperament(e) {
    e.preventDefault();
    dispatch(filterDogByTemperaments(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(filterDogByCreated(e.target.value));
    setCurrentPage(1);
  }

  function handleSortByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleSortByWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function tempsToString(index) {
    const temps = [];
    for (let i = 0; i < index.length; i++) {
      temps.push(" " + index[i].name);
    }
    return temps.toString().slice(1, undefined);
  }

  if (allDogs[0] && allTemperaments[0] && loaded) {
    return (
      <div>
        <NavBar></NavBar>
        <div className={styles.resYFiltros}>
          <button
            className={styles.reiniciarPerros}
            onClick={(e) => {
              handleRestart(e);
            }}
          >
            Restart dogs
          </button>
          <div className={styles.filtradosContenedor}>
            <div className={styles.filterBy}>
              <div className={styles.filtros}>
                <div>
                  <p>Temperament</p>
                  <select onChange={(e) => handleFilterTemperament(e)}>
                    <option value="all">All</option>
                    {allTemperaments?.map((temp) => {
                      return <option value={temp.name}>{temp.name}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <p>Created</p>
                  <select onChange={(e) => handleFilterCreated(e)}>
                    <option value="all">All</option>
                    <option value="created">Created</option>
                    <option value="not-created">Not created</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.orderBy}>
              <div>
                <h4>Order by name:</h4>
                <select onChange={(e) => handleSortByName(e)}>
                  <option value="default" selected hidden></option>
                  <option value="asc">A - Z</option>
                  <option value="desc">Z - A</option>
                </select>
              </div>

              <div>
                <h4>Order by weight:</h4>
                <select onChange={(e) => handleSortByWeight(e)}>
                  <option value="default" selected hidden></option>
                  <option value="asc">Asc</option>
                  <option value="desc">Desc</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.paginado}>
          <div className={styles.paginaPerros}>
            {currentDogs?.map((el) => {
              if (el.createdInDb) {
                return (
                  <Link to={`/home/${el.id}`}>
                    <Card
                      name={el.name}
                      min_weight={el.min_weight}
                      max_weight={el.max_weight}
                      temperament={tempsToString(el.temperaments)}
                      image={el.image}
                    />
                  </Link>
                );
              } else {
                return (
                  <Link to={`/home/${el.id}`}>
                    <Card
                      name={el.name}
                      min_weight={el.min_weight}
                      max_weight={el.max_weight}
                      temperament={el.temperament}
                      image={el.image}
                    />
                  </Link>
                );
              }
            })}
          </div>
        <Pages
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            pages={pages}
          />
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Home;
