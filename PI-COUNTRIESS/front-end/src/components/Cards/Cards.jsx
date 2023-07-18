import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import {
  getAllCountries,
  paginationNext,
  paginationPrev,
} from "../../../redux/actions";
import Card from "../../Card/Card";
import SearchBar from "../../components/Country/";
import SortByName from "../../SortByName/SortByName";
import SortByPopulation from "../../SortByPopulation/SortByPopulation";
import FilterContinent from "../../FilterContinent/FilterContinent";

const Cards = () => {
  const dispatch = useDispatch();
  const countriesCopy = useSelector((state) => state.countriesCopy);
  const countryOrder = useSelector((state) => state.countryOrder);
  const countryPopulation = useSelector((state) => state.countryPopulation);
  const countryContinent = useSelector((state) => state.countryContinent);
  const currentPage = useSelector((state) => state.currentPage);

  // PROBANDO PAGINACION
  const ITEMS_FOR_PAGE = 10;

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleNextPage = () => {
    dispatch(paginationNext());
  };

  const handlePrevPage = () => {
    dispatch(paginationPrev());
  };

  let countriesToShow;
  if (countryOrder.length > 0) {
    countriesToShow = countryOrder.slice((currentPage - 1) * ITEMS_FOR_PAGE, currentPage * ITEMS_FOR_PAGE);
  } else if (countryPopulation.length > 0) {
    countriesToShow = countryPopulation.slice((currentPage - 1) * ITEMS_FOR_PAGE, currentPage * ITEMS_FOR_PAGE);
  } else if (countryContinent.length > 0) {
    countriesToShow = countryContinent.slice((currentPage - 1) * ITEMS_FOR_PAGE, currentPage * ITEMS_FOR_PAGE);
  } else {
    countriesToShow = countriesCopy.slice((currentPage - 1) * ITEMS_FOR_PAGE, currentPage * ITEMS_FOR_PAGE);
  }

  //disabled={countriesToShow.length < ITEMS_FOR_PAGE}
  //disabled={currentPage === 1}
  return (
    <div>
      <button onClick={handlePrevPage} >Prev Page</button>
      <button onClick={handleNextPage} >Next Page</button>



      <SearchBar />
      <SortByName />
      <SortByPopulation />
      <FilterContinent />
      {countriesToShow.length === 0 ? (
        <p>Loading...</p>
      ) : (
        countriesToShow.map(({ id_country, name, flag_image, continent }) => (
          <Card
            key={id_country}
            id_country={id_country}
            name={name}
            flag_image={flag_image}
            continent={continent}
          />
        ))
      )}
    </div>
  );
};

export default Cards;
