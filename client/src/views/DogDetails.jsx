import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index";
import Loading from "./Loading";

const DogDetails = (e) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState();
  const dogDetails = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetail(e.match.params.id));
    setLoaded(true)
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
      <div>
        <div>
          <h1>{dogDetails[0].name}</h1>
          <img src={dogDetails[0].image} alt="Image not found" />
        </div>

        <div>
          <div>
            <h4>Weight</h4>
            <div>
              <p>Min:</p>
              <p>{dogDetails[0].min_weight}</p>
              <p>Max:</p>
              <p>{dogDetails[0].max_weight}</p>
            </div>
          </div>
          <div>
            <h4>Height</h4>
            <div>
              <p>Min:</p>
              <p>{dogDetails[0].min_height}</p>
              <p>Max:</p>
              <p>{dogDetails[0].max_height}</p>
            </div>
          </div>
        </div>
        <div>
          <h4>Life span:</h4>
          <p>{dogDetails[0].life_span}</p>
        </div>
        <div>
          <h4>Temperament</h4>
          {dogDetails[0].createdInDb ? (
            <p>{tempsToString(dogDetails[0].temperaments)}</p>
          ) : (
            <p>{dogDetails[0].temperament}</p>
          )}
        </div>
        <Link to="/home">
          <button>Go back</button>
        </Link>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default DogDetails;
