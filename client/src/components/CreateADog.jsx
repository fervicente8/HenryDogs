import React from "react";
import { Link } from "react-router-dom";
import styles from './CreateADog.module.css'

const CreateADog = () => {
  return (
    <div>
      <div className={styles.text}>There are no breeds to show</div>
      <Link to="/createdog">
        <button className={styles.createButton}>Create one</button>
      </Link>
    </div>
  );
};

export default CreateADog;
