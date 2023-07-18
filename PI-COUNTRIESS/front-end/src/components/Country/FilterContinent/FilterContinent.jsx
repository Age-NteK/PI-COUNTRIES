import { useDispatch } from "react-redux";
import { filterByContinent, sortContinentByName } from "../../../redux/actions";

const FilterContinent = () => {
  const dispatch = useDispatch();

  const handleContinent = (event) => {
    const select = event.target.value;
    if (select === "All") {
      dispatch(filterByContinent("All"));
    } else {
      dispatch(filterByContinent(select));
    }
  };


  const handleOrderName = (event) => {
    const select = event.target.value;
    if (select === "Asc") {
      dispatch(sortContinentByName("Asc"));
    } else if (select === "Desc") {
      dispatch(sortContinentByName("Desc"));
    }
  };


  return (
    <div>
      <select name="continent" id="continent" onChange={handleContinent}>
        <option>Filter Continent</option>
        <option value="All">All Continents</option>
        <option value="Africa">Africa</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctic</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select name="order" id="order" onChange={handleOrderName}>
      <option>Sort Continent alphabetically</option>
        <option value="Asc">Ascendent (A-Z)</option>
        <option value="Desc">Descendent (Z-A)</option>
      </select>
    </div>
  );
};

export default FilterContinent;
