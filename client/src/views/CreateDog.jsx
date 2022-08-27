import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments, getDogs } from "../actions/index";
import Loading from "./Loading";
import styles from "./CreateDog.module.css";

const CreateDog = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allDogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.temperaments);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getDogs());
    setLoaded(true);
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    min_weight: "",
    max_weight: "",
    min_height: "",
    max_height: "",
    life_span: "",
    temperament: [],
    image: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (input) => {
    const errors = { state: true };
    const onlyWords = new RegExp(/^[a-zA-Z\s]*$/g);
    const onlyNumbers = new RegExp(/^[-+]?[0-9]+$/);
    const imageUrl = new RegExp(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/)
    const repeat = allDogs.filter((el) => el.name.toLowerCase() === input.name.toLowerCase());

    if (!input.name) {
      errors.name = "This space cannot be empty";
      errors.state = false;
    } else if (
      onlyWords.test(input.name) === false ||
      input.name.length < 5 ||
      input.name.length > 50
    ) {
      errors.name =
        "The name cannot contain symbols or numbers, and must be between 5 and 50 characters long";
      errors.state = false;
    } else if (repeat.length > 0) {
      errors.name = "The name has already been registered";
      errors.state = false;
    }

    if (!input.min_weight || !input.max_weight) {
      errors.weight = "This space cannot be empty!";
    } else if (
      onlyNumbers.test(input.min_weight) === false ||
      onlyNumbers.test(input.max_weight) === false ||
      Number(input.min_weight) < 1 ||
      Number(input.min_weight) > 100 ||
      Number(input.max_weight) < 1 ||
      Number(input.max_weight) > 100
    ) {
      errors.weight =
        "The weight cannot contain symbols or letters, and must be between 1 and 100";
    } else if (
      Number(input.min_weight) > Number(input.max_weight) ||
      input.min_weight.charAt(0) === "0" ||
      input.max_weight.charAt(0) === "0"
    ) {
      errors.weight =
        "The minimum weight cannot be greater than the maximum and cannot start at 0";
      errors.state = false;
    }

    if (!input.min_height || !input.max_height) {
      errors.height = "This space cannot be empty!";
      errors.state = false;
    } else if (
      onlyNumbers.test(input.min_height) === false ||
      onlyNumbers.test(input.max_height) === false ||
      Number(input.min_height) < 5 ||
      Number(input.min_height) > 120 ||
      Number(input.max_height) < 5 ||
      Number(input.max_height) > 120
    ) {
      errors.height =
        "The height cannot contain symbols or letters, and must be between 5 and 120";
      errors.state = false;
    } else if (
      Number(input.min_height) > Number(input.max_height) ||
      input.min_height.charAt(0) === "0" ||
      input.max_height.charAt(0) === "0"
    ) {
      errors.height =
        "The minimum height cannot be greater than the maximum and cannot start at 0";
      errors.state = false;
    }

    if (!input.life_span) {
      errors.life_span = "This space cannot be empty!";
      errors.state = false;
    } else if (input.life_span.charAt(0) === "0") {
      errors.life_span = "The life span cannot start at 0";
      errors.state = false;
    } else if (
      onlyNumbers.test(input.life_span) === false ||
      Number(input.life_span) < 1 ||
      Number(input.life_span) > 20
    ) {
      errors.life_span =
        "The life span cannot contain symbols or letters, and must be between 1 and 20";
      errors.state = false;
    }

    if (!input.temperament[0]) {
      errors.temperament = "You have to choose at least one temperament";
      errors.state = false;
    }

    if (input.image === "") {
      input.image =
        "https://res.cloudinary.com/postedin/image/upload/d_mascotas:no-image.jpg,f_auto,q_80/mascotas/c-postedin-image-50106.jpeg";
    } else if (imageUrl.test(input.image) === false){
      errors.image = "Enter a valid url, it must end with an image format"
    }
    return errors;
  };

  function handleChange(el) {
    setInput({
      ...input,
      [el.target.name]: el.target.value,
    });
    setErrors(
      validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );
  }

  function handleSelected(el) {
    setInput({
      ...input,
      temperament: [...input.temperament, el.target.value],
    });
    setErrors(
      validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );
  }

  function removeTemp(el) {
    setInput({
      ...input,
      temperament: input.temperament.filter((e) => e !== el),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(input));
    if (errors.state === true) {
      dispatch(postDog(input));
      setInput({
        name: "",
        min_weight: "",
        max_weight: "",
        min_height: "",
        max_height: "",
        life_span: "" + "years",
        temperament: [],
        image: "",
      });
      history.push("/createdsuccessfully");
    }
  }

  if (allTemperaments[0] && loaded) {
    return (
      <div className={styles.contenedor}>
        <div className={styles.formContenedor}>
          <Link to="/home">
            <button className={styles.homeButton}>Go home</button>
          </Link>
          <h1>Create your dog</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.formName}>
              <div>
                <h4>Name</h4>
              </div>
              <div>
                <input
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Ej. Bulldog"
                />
                <p className={styles.error}>{errors.name}</p>
              </div>
            </div>
            <div className={styles.division}>
              <div className={styles.formWeightHeight}>
                <div className={styles.medidas}>
                  <h4>Weight</h4>
                  <p>(in kg)</p>
                </div>
                <div>
                  <label>Min</label>
                  <input
                    type="text"
                    value={input.min_weight}
                    name="min_weight"
                    onChange={handleChange}
                  />
                  <label>Max</label>
                  <input
                    type="text"
                    value={input.max_weight}
                    name="max_weight"
                    onChange={handleChange}
                  />
                  <p className={styles.error}>{errors.weight}</p>
                </div>
              </div>

              <div className={styles.formWeightHeight}>
                <div className={styles.medidas}>
                  <h4>Height</h4>
                  <p>(in cm)</p>
                </div>
                <div>
                  <label>Min</label>
                  <input
                    type="text"
                    value={input.min_height}
                    name="min_height"
                    onChange={handleChange}
                  />
                  <label>Max</label>
                  <input
                    type="text"
                    value={input.max_height}
                    name="max_height"
                    onChange={handleChange}
                  />
                  <p className={styles.error}>{errors.height}</p>
                </div>
              </div>
            </div>
            <div className={styles.formLifeSpan}>
              <div className={styles.medidas}>
                <h4>Life span</h4>
                <p>(in years)</p>
              </div>
              <div>
                <input
                  type="text"
                  value={input.life_span}
                  name="life_span"
                  onChange={handleChange}
                />
                <p className={styles.error}>{errors.life_span}</p>
              </div>
            </div>

            <div className={styles.formTemps}>
              <div className={styles.medidas}>
                <h4>Choose the temperaments</h4>
                <p>(at least one)</p>
              </div>
              <div>
                <select onChange={handleSelected}>
                  <option value="" selected disabled hidden>
                    ---All temperaments---
                  </option>
                  {allTemperaments.map((el) => {
                    if (input.temperament.includes(el.name)) {
                      return (
                        <option value={el.name} disabled>
                          {el.name}
                        </option>
                      );
                    } else {
                      return <option value={el.name}>{el.name}</option>;
                    }
                  })}
                </select>
              </div>
              <div>
                <p className={styles.warnings}>
                  *Click on the temperament to delete it*
                </p>
                <ul className={styles.listadoTemps}>
                  {input.temperament.map((el) => {
                    return <li onClick={() => removeTemp(el)}>{el}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className={styles.formImage}>
              <div className={styles.medidas}>
                <h4>Image</h4>
                <p>(image url)</p>
              </div>
              <div>
                <input
                  type="text"
                  value={input.image}
                  name="image"
                  onChange={handleChange}
                />
                <p className={styles.error}>{errors.image}</p>
                <p className={styles.warnings}>
                  *If you don't upload an image, a random one will be uploaded*
                </p>
              </div>
            </div>
            <div className={styles.formButton}>
              <button type="submit">Create 🐶</button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default CreateDog;
