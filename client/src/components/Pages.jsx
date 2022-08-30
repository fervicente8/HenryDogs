import React from "react";
import styles from "./Pages.module.css";

const Pages = ({ previousPage, nextPage, currentPage, firstPage, lastPage }) => {
  return (
    <nav>
      <ul className={styles.paginado}>
        <button onClick={() => firstPage()}>🢀</button>
        <button onClick={() => previousPage()}>🡨</button>
        <li>{currentPage}</li>
        <button onClick={() => nextPage()}>🡪</button>
        <button onClick={() => lastPage()}>🢂</button>
      </ul>
    </nav>
  );
};

export default Pages;
