import React from "react";
import styles from "./Pages.module.css";

const Pages = ({ dogsPerPage, allDogs, pages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className={styles.paginado}>
        {pageNumbers?.map((num) => {
          return (
              <button key={num} onClick={() => pages(num)}>{num}</button>
          );
        })}
      </div>
    </nav>
  );
};

export default Pages;
