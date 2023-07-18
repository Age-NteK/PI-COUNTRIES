/* eslint-disable no-case-declarations */
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
  // PAGINATION,
  //Probando paginacin desde redux
  SET_COUNTRY_ORDER,
  SET_COUNTRY_POPULATION,
  SET_COUNTRY_CONTINENT,
  PAGINATION_NEXT,
  PAGINATION_PREV
} from "./action-types";



const initialState = {
  allCountries: [], //Almacena todos los paises
  countriesCopy: [], //Almacena todos los paises para realizar filtros
  countryDetail: [], //Almacena detalle de un pais por id
  countryName: [], //Almacena info de un pais por name
  countryContinent: [], // Almacena continentes de los paises
  countryOrder: [], //Almacena paises para ordenamientos
  countryPopulation: [], //Almacena poblacion de los paises
  countriesPagination: [],
  currentPage: 1,
  // currentPage: 1, // Pagina actual
  // cardsPerPage: 10, // Tarjetas por página
};

const reducer = (state = initialState, { type, payload }) => {
  // const ITEMS_FOR_PAGE = 10;
  switch (type) {
    case GET_ALL_COUNTRIES:
      console.log(payload);
      return {
        ...state,
        allCountries: payload,
        countriesCopy: [...payload],
        countryDetail: [],
        countryName: [],
        countryContinent: [],
      };

    case GET_COUNTRY_BY_ID:
      console.log(payload);
      return {
        ...state,
        countryDetail: payload,
        countryName: [],
        countryContinent: [],
      };

    case GET_COUNTRY_BY_NAME:
      console.log(payload);
      return {
        ...state,
        countryDetail: [],
        countryName: payload,
        countryContinent: [],
      };

    case SORT_COUNTRIES_BY_NAME_ASC_DESC:
      console.log(payload);
      let sortCountriesByName = [...state.countriesCopy];
      // console.log(sortCountriesByName);
      if (payload === "Asc") {
        sortCountriesByName.sort((a, b) => a.name.localeCompare(b.name));
      } else if (payload === "Desc") {
        sortCountriesByName.sort((a, b) => b.name.localeCompare(a.name));
      }
      console.log(sortCountriesByName);
      return {
        ...state,
        countryDetail: [],
        countryName: [],
        countryContinent: [],
        countryPopulation: [],
        countryOrder: sortCountriesByName,
      };

    case SORT_BY_POPULATION_ASC_DESC:
      console.log(payload);
      let sortCountriesByPopulation = [...state.countriesCopy];
      console.log(sortCountriesByPopulation);

      if (payload === "Asc") {
        sortCountriesByPopulation.sort((a, b) => a.population - b.population);
      } else if (payload === "Desc") {
        sortCountriesByPopulation.sort((a, b) => b.population - a.population);
      }

      return {
        ...state,
        countryDetail: [],
        countryName: [],
        countryOrder: [],
        countryContinent: [],
        countryPopulation: sortCountriesByPopulation,
      };

    case FILTER_BY_CONTINENT:
      console.log(payload);
      let filterByContinent = [...state.countriesCopy].filter((country) =>
        country.continent.includes(payload)
      );
      console.log(filterByContinent);

      if (payload === "All") {
        return {
          ...state,
          allCountries: [...state.allCountries],
        };
      } else {
        return {
          ...state,
          countryDetail: [],
          countryName: [],
          countryOrder: [],
          countryPopulation: [],
          countryContinent: filterByContinent,
        };
      }

    case SORT_CONTINENT_BY_NAME:
      console.log(payload);
      const orderContinentByName = [...state.countryContinent];
      console.log(orderContinentByName);

      if (payload === "Asc") {
        orderContinentByName.sort((a, b) => a.name.localeCompare(b.name));
      } else if (payload === "Desc") {
        orderContinentByName.sort((a, b) => b.name.localeCompare(a.name));
      }
      console.log(orderContinentByName);
      return {
        ...state,
        countryDetail: [],
        countryName: [],
        countryOrder: [],
        countryPopulation: [],
        countryContinent: orderContinentByName,
      };

      case SET_COUNTRY_ORDER:
        return {
          ...state,
          countryOrder: payload,
          countryPopulation: [],
          countryContinent: [],
        };

      case SET_COUNTRY_POPULATION:
      return {
        ...state,
        countryOrder: [],
        countryPopulation: payload,
        countryContinent: [],
      };

    case SET_COUNTRY_CONTINENT:
      return {
        ...state,
        countryOrder: [],
        countryPopulation: [],
        countryContinent: payload,
      };

    case PAGINATION_NEXT:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case PAGINATION_PREV:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    case CLEAN:
      console.log(payload);
      return {
        ...state,
        countryDetail: [],
        countryName: [],
        countryContinent: [],
        countryOrder: [],
        countryPopulation: [],
      };

    default:
      return { ...state };
  }
};

export default reducer;





    // case PAGINATION:
    //   console.log(payload);

    //   const nextPage = state.currentPage + 1;
    //   const prevPage = state.currentPage - 1;
    //   const index =
    //     payload === "next"
    //       ? nextPage * ITEMS_FOR_PAGE
    //       : nextPage * ITEMS_FOR_PAGE;

    //   if (payload === "next" && index >= state.countriesCopy.length) {
    //     return { ...state };
    //   } else if (payload === "prev" && prevPage < 0) {
    //     return { ...state };
    //   }

    //   return {
    //     ...state,
    //     countriesPagination: [...state.countriesCopy].splice(
    //       index,
    //       ITEMS_FOR_PAGE
    //     ),
    //     currentPage: payload === "next" ? nextPage : prevPage,
    //   };