import axios from "axios";

const url = "http://localhost:3001";

export const getDogs = () => {
  return async function (dispatch) {
    const dogsBack = await axios.get(`${url}/dogs`);
    dispatch({ type: "GET_DOGS", payload: dogsBack.data });
  };
};

export const getNameDogs = (name) => {
  return async function (dispatch) {
    try {
      const namesBack = await axios.get(`${url}/dogs?name=${name}`);
      return dispatch({ type: "GET_NAME_DOGS", payload: namesBack.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const detailsBack = await axios.get(`${url}/dogs/${id}`);
      dispatch({ type: "GET_DETAIL", payload: detailsBack.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanDetail = () => {
  return {
    type: "CLEAN_DETAIL"
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    const temperamentsBack = await axios.get(`${url}/temperaments`);
    dispatch({ type: "GET_TEMPERAMENTS", payload: temperamentsBack.data });
  };
};

export const postDog = (payload) => {
  return async function () {
    const post = await axios.post(`${url}/dogs`, payload);
    return post;
  };
};

export const filterDogByTemperaments = (payload) => {
  return {
    type: "FILTER_BY_TEMPERAMENTS",
    payload,
  };
};

export const filterDogByCreated = (payload) => {
  return {
    type: "FILTER_BY_CREATED",
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
};

export const orderByWeight = (payload) => {
  return {
    type: "ORDER_BY_WEIGHT",
    payload,
  };
};
