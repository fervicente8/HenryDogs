import React from "react";
import { useHistory } from "react-router-dom";
import styles from './Created.module.css'

const Created = () => {
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    history.push("/home");
  }

  return (
    <div className={styles.container}>
      <h1>Dog created successfully!</h1>
      <div></div>
      <button onClick={handleClick}>Go home</button>
    </div>
  );
};

export default Created;
