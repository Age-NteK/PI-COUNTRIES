import { useDispatch } from "react-redux";
import { sortCountriesByNameAscDesc } from "../../../redux/actions";

const SortByName = () => {
  const dispatch = useDispatch();

  const handleOrderName = (event) => {
    const select = event.target.value;
    if (select === "Asc") {
      dispatch(sortCountriesByNameAscDesc("Asc"));
    } else if (select === "Desc") {
      dispatch(sortCountriesByNameAscDesc("Desc"));
    }
  };

  return (
    <div>
      <select name="order" id="order" onChange={handleOrderName}>
        <option>Sort All Countries alphabetically</option>
        <option value="Asc">Ascendent (A-Z)</option>
        <option value="Desc">Descendent (Z-A)</option>
      </select>
    </div>
  );
};

export default SortByName;
