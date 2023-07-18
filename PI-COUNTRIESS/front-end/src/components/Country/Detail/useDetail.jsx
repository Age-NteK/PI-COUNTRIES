//PAGINACION QUE FUNCIONA PARA TODOS LOS FILTROS PERO NO PERMITE REALIZAR FILTROS DESPUES DE PASAR LA PAGINA

//IGUAL FUNCIONA
// import { useSelector, useDispatch } from "react-redux";
// import {useEffect} from 'react'
// import {
//   getAllCountries,
//   paginationNext,
//   paginationPrev,
// } from "../../redux/actions";
// import Card from "../Card/Card";
// import SearchBar from "../SearchBar/SearchBar";
// import SortByName from "../SortByName/SortByName";
// import SortByPopulation from "../SortByPopulation/SortByPopulation";
// import FilterContinent from "../FilterContinent/FilterContinent";

// const Cards = () => {
//   const dispatch = useDispatch();
//   const countriesCopy = useSelector((state) => state.countriesCopy);
//   const countryOrder = useSelector((state) => state.countryOrder);
//   const countryPopulation = useSelector((state) => state.countryPopulation);
//   const countryContinent = useSelector((state) => state.countryContinent);
//   const currentPage = useSelector((state) => state.currentPage);

//   // PROBANDO PAGINACION
//   const ITEMS_FOR_PAGE = 10;

//   useEffect(() => {
//     dispatch(getAllCountries());
//   }, [dispatch]);

//   const handleNextPage = () => {
//     dispatch(paginationNext());
//   };

//   const handlePrevPage = () => {
//     dispatch(paginationPrev());
//   };

//   let countriesToShow;
//   if (countryOrder.length > 0) {
//     countriesToShow = countryOrder.slice((currentPage - 1) * ITEMS_FOR_PAGE, currentPage * ITEMS_FOR_PAGE);
//   } else if (countryPopulation.length > 0) {
//     countriesToShow = countryPopulation.slice((currentPage - 1) * ITEMS_FOR_PAGE, currentPage * ITEMS_FOR_PAGE);
//   } else if (countryContinent.length > 0) {
//     countriesToShow = countryContinent.slice((currentPage - 1) * ITEMS_FOR_PAGE, currentPage * ITEMS_FOR_PAGE);
//   } else {
//     countriesToShow = countriesCopy.slice((currentPage - 1) * ITEMS_FOR_PAGE, currentPage * ITEMS_FOR_PAGE);
//   }

//   return (
//     <div>
//       <button onClick={handlePrevPage} disabled={currentPage === 1}>
//         Prev Page
//       </button>
//       <button onClick={handleNextPage} disabled={countriesToShow.length < ITEMS_FOR_PAGE}>
//         Next Page
//       </button>

//       <SearchBar />
//       <SortByName />
//       <SortByPopulation />
//       <FilterContinent />
//       {countriesToShow.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         countriesToShow.map(({ id_country, name, flag_image, continent }) => (
//           <Card
//             key={id_country}
//             id_country={id_country}
//             name={name}
//             flag_image={flag_image}
//             continent={continent}
//           />
//         ))
//       )}
//     </div>
//   );
// };

// export default Cards;




//PAGINACION FUNCIONA PARA TODOS LOS CASOS CORRECTAMNTE. PERO TIENE TODA LA LOGICA EN EL COMPONENTE
//PROXIMO PASO INTENTAR HACER LA  LOGICA CON REDUX 

// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllCountries, pagination } from "../../redux/actions";
// import Card from "../Card/Card";
// import SearchBar from "../SearchBar/SearchBar";
// import SortByName from "../SortByName/SortByName";
// import SortByPopulation from "../SortByPopulation/SortByPopulation";
// import FilterContinent from "../FilterContinent/FilterContinent";

// const Cards = () => {
//   const dispatch = useDispatch();
//   const countriesCopy = useSelector((state) => state.countriesCopy);
//   const countryOrder = useSelector((state) => state.countryOrder);
//   const countryPopulation = useSelector((state) => state.countryPopulation);
//   const countryContinent = useSelector((state) => state.countryContinent);

//   // PROBANDO PAGINACION
//   const ITEMS_FOR_PAGE = 10;
//   const [currentPage, setCurrentPage] = useState(1);

//   // Use separate states for each filtered/ordered data
//   const [itemCountryOrder, setItemCountryOrder] = useState([]);
//   const [itemCountryPopulation, setItemCountryPopulation] = useState([]);
//   const [itemCountryContinent, setItemCountryContinent] = useState([]);

//   useEffect(() => {
//     // Update the itemCountryOrder state whenever the countryOrder changes or pagination action is dispatched
//     setItemCountryOrder([...countryOrder].splice((currentPage - 1) * ITEMS_FOR_PAGE, ITEMS_FOR_PAGE));
//   }, [countryOrder, currentPage]);

//   useEffect(() => {
//     // Update the itemCountryPopulation state whenever the countryPopulation changes or pagination action is dispatched
//     setItemCountryPopulation([...countryPopulation].splice((currentPage - 1) * ITEMS_FOR_PAGE, ITEMS_FOR_PAGE));
//   }, [countryPopulation, currentPage]);

//   useEffect(() => {
//     // Update the itemCountryContinent state whenever the countryContinent changes or pagination action is dispatched
//     setItemCountryContinent([...countryContinent].splice((currentPage - 1) * ITEMS_FOR_PAGE, ITEMS_FOR_PAGE));
//   }, [countryContinent, currentPage]);

//   const handleNextPage = () => {
//     // Increment the currentPage state and dispatch the pagination action
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     // Decrement the currentPage state and dispatch the pagination action
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   useEffect(() => {
//     dispatch(getAllCountries());
//   }, []);

//   // Determine the array to be displayed based on the selected filter/order
//   let countriesToShow;
//   if (countryOrder.length > 0) {
//     countriesToShow = itemCountryOrder;
//   } else if (countryPopulation.length > 0) {
//     countriesToShow = itemCountryPopulation;
//   } else if (countryContinent.length > 0) {
//     countriesToShow = itemCountryContinent;
//   } else {
//     countriesToShow = [...countriesCopy].splice((currentPage - 1) * ITEMS_FOR_PAGE, ITEMS_FOR_PAGE);
//   }

//   return (
//     <div>
//       <button onClick={handlePrevPage} disabled={currentPage === 1}>
//         Prev Page
//       </button>
//       <button onClick={handleNextPage} disabled={countriesToShow.length < ITEMS_FOR_PAGE}>
//         Next Page
//       </button>

//       <SearchBar />
//       <SortByName />
//       <SortByPopulation />
//       <FilterContinent />
//       {countriesToShow.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         countriesToShow.map(({ id_country, name, flag_image, continent }) => (
//           <Card
//             key={id_country}
//             id_country={id_country}
//             name={name}
//             flag_image={flag_image}
//             continent={continent}
//           />
//         ))
//       )}
//     </div>
//   );
// };

// export default Cards;





// //ORDENAR COUNTRIES Y CONTINENT AL MISMO TIEMPO PRUEBA

//   case SORT_COUNTRIES_BY_NAME_ASC_DESC:
//     console.log(payload);
//     let sortCountriesByName = [...state.countriesCopy];
//     const orderContinentByName = [...state.countryContinent];
//     // console.log(sortCountriesByName);
//     if (payload === "Asc") {
//       sortCountriesByName.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (payload === "Desc") {
//       sortCountriesByName.sort((a, b) => b.name.localeCompare(a.name));
//     } else if (payload === "Ascendent") {
//       orderContinentByName.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (payload === "Descendent") {
//       orderContinentByName.sort((a, b) => b.name.localeCompare(a.name));
//     }


//     console.log(sortCountriesByName);
//     return {
//       ...state,
//       countryDetail: [],
//       countryName: [],
//       countryContinent: orderContinentByName,
//       countryPopulation: [],
//       countryOrder: sortCountriesByName,
//     };


// //PAGINADO DE COUTNRIES EN COMPONENTE FUNCIONAL

//     import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllCountries } from "../../redux/actions";
// import Card from "../Card/Card";
// import SearchBar from "../SearchBar/SearchBar";
// import SortByName from "../SortByName/SortByName";
// import SortByPopulation from "../SortByPopulation/SortByPopulation";
// import FilterContinent from "../FilterContinent/FilterContinent";

// const Cards = () => {
//   const dispatch = useDispatch();
//   const countriesCopy = useSelector((state) => state.countriesCopy);
//   const countryOrder = useSelector((state) => state.countryOrder);
//   const countryPopulation = useSelector((state) => state.countryPopulation);
//   const countryContinent = useSelector((state) => state.countryContinent);
//   // const currentPage = useSelector((state) => state.currentPage)
//   // const cardsPage = useSelector((state) => state.cardsPage)

//   //PROBANDO PAGINACION
//   const [currentPage, setCurrentPage] = useState(1); //1
//   const cardsPerPage = 10; //10

//   const indexOfLastCard = currentPage * cardsPerPage; // 1 * 10 = 10
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage; //  10  - 10 = 0
//   let countriesToShow = countriesCopy.slice(indexOfFirstCard, indexOfLastCard); // 40 => 0 , 10

//   const totalPages = Math.ceil(countriesCopy.length / cardsPerPage); // 40  % 10 =  4

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {  // 1 < 10  = true
//       setCurrentPage((prevPage) => prevPage + 1); //  currentPage = x + 1 = avanza 1
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   useEffect(() => {
//     dispatch(getAllCountries());
//   }, []);

//   // let countriesToShow;

//   if (countryOrder.length > 0) {
//     countriesToShow = countryOrder;
//   }
//   // else if (countryPopulation.length > 0) {
//   //   countriesToShow = countryPopulation;
//   // } else if (countryContinent.length > 0) {
//   //   countriesToShow = countryContinent;
//   // } else {
//   //   countriesToShow = countriesCopy;
//   // }

//   return (
//     <div>
//       <button onClick={handlePrevPage}>Prev Page</button>
//       <button onClick={handleNextPage}>Next Page</button>

//       <SearchBar />
//       <SortByName />
//       <SortByPopulation />
//       <FilterContinent />
//       {countriesToShow.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         countriesToShow.map(({ id_country, name, flag_image, continent }) => (
//           <Card
//             key={id_country}
//             id_country={id_country}
//             name={name}
//             flag_image={flag_image}
//             continent={continent}
//           />
//         ))
//       )}
//     </div>
//   );
// };

// export default Cards;