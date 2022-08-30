const initialState = {
  dogs: [],
  allDogs: [],
  details: [],
  temperaments: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case "GET_NAME_DOGS":
      return {
        ...state,
        dogs: action.payload,
      };

    case "GET_DETAIL":
      return {
        ...state,
        details: action.payload,
      };

    case "CLEAN_DETAIL":
      return {
        ...state,
        details: [],
      };

    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };

    case "FILTER_BY_TEMPERAMENTS":
      const allDogsTemp = state.allDogs;
      const filterByTemp =
        action.payload === "all"
          ? allDogsTemp
          : allDogsTemp.filter((el) => {
              if (Array.isArray(el.temperaments) && !el.temperament) {
                const temp = el.temperaments.map((te) => te.name);
                if (temp.includes(action.payload)) {
                  return el;
                }
              }
              if (typeof el.temperament === "string" && !el.temperaments)
                return el.temperament.includes(action.payload);
            });
      return {
        ...state,
        dogs: filterByTemp,
      };

    case "FILTER_BY_CREATED":
      const allDogsCreated = state.allDogs;
      const filterByCreated =
        action.payload === "created"
          ? allDogsCreated.filter((el) => el.createdInDb)
          : allDogsCreated.filter((el) => !el.createdInDb);

      return {
        ...state,
        dogs: action.payload === "all" ? state.allDogs : filterByCreated,
      };

    case "ORDER_BY_NAME":
      const sortedDogsByName =
        action.payload === "asc"
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedDogsByName,
      };

    case "ORDER_BY_WEIGHT":
      const sortedDogsByWeight =
        action.payload === "asc"
          ? state.dogs.sort(function (a, b) {
              if (parseInt(a.min_weight) > parseInt(b.min_weight)) {
                return 1;
              }
              if (parseInt(b.min_weight) > parseInt(a.min_weight)) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (parseInt(a.max_weight) > parseInt(b.max_weight)) {
                return -1;
              }
              if (parseInt(b.max_weight) > parseInt(a.max_weight)) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedDogsByWeight,
      };

    default:
      return state;
  }
}
