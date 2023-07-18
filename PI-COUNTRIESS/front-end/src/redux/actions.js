import axios from "axios";

import {
  //Countries
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  CLEAN,
  GET_COUNTRY_BY_NAME,
  SORT_COUNTRIES_BY_NAME_ASC_DESC,
  SORT_BY_POPULATION_ASC_DESC,
  FILTER_BY_CONTINENT,
  SORT_CONTINENT_BY_NAME,
  // PAGINATION
  SET_COUNTRY_ORDER,
  SET_COUNTRY_POPULATION,
  SET_COUNTRY_CONTINENT,
  PAGINATION_NEXT,
  PAGINATION_PREV
} from "./action-types";

// ENDPOINTS
const URL_COUNTRY = "http://localhost:3001/country";
// const URL_ACTIVITY = "http://localhost:3001/activity";

//HANDLER ERROR
const handleError = (error) => {
  return error.message;
};

export const getAllCountries = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL_COUNTRY);
    // const filterData = data.slice(0, 40);

    if (data.length) {
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      });
    }
  } catch (error) {
    handleError(error);
  }
};

export const getCountryById = (id_country) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_COUNTRY}/${id_country}`);
      console.log(data);
      return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: data.searchCountry,
      });
    } catch (error) {
      handleError(error);
    }
  };
};

export const clean = () => {
  return { type: CLEAN };
};

export const getCountryByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_COUNTRY}?name=${name}`);
      console.log(data);
      if (data && data.searchCountry) { 
        return dispatch({
          type: GET_COUNTRY_BY_NAME,
          payload: data.searchCountry
        });
      }
    } catch (error) {
      handleError(error);
    }
  };
};

export const sortCountriesByNameAscDesc = (order) => {
  return { type: SORT_COUNTRIES_BY_NAME_ASC_DESC, payload: order };
};

export const sortByPopulationAscDes = (population) => {
  return { type: SORT_BY_POPULATION_ASC_DESC, payload: population };
};

export const filterByContinent = (continent) => {
  return { type: FILTER_BY_CONTINENT, payload: continent };
};

export const sortContinentByName = (order) => {
  return {type: SORT_CONTINENT_BY_NAME, payload: order}
}

export const setCountryOrder = (countryOrder) => ({
  type: SET_COUNTRY_ORDER,
  payload: countryOrder,
});

export const setCountryPopulation = (countryPopulation) => ({
  type: SET_COUNTRY_POPULATION,
  payload: countryPopulation,
});

export const setCountryContinent = (countryContinent) => ({
  type: SET_COUNTRY_CONTINENT,
  payload: countryContinent,
});

export const paginationNext = () => ({
  type: PAGINATION_NEXT,
});

export const paginationPrev = () => ({
  type: PAGINATION_PREV,
});



// export const pagination = (page) => {
//   return {type: PAGINATION, payload: page}
// }