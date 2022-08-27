import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Opss! Something went wrong</h1>
      <p>it seems that the site you are looking for does not exist</p>
      <div></div>
      <Link to="/home">
        <button>Go home!</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
