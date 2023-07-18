import { useDispatch } from "react-redux";
import { sortByPopulationAscDes } from "../../../redux/actions";

const SortByPopulation = () => {
  const dispatch = useDispatch();

  const handleOrderPopulation = (event) => {
    const select = event.target.value;
    if (select === "Asc") {
      dispatch(sortByPopulationAscDes("Asc"));
    } else if (select === "Desc") {
      dispatch(sortByPopulationAscDes("Desc"));
    }
  };

  return (
    <div>
      <select name="population" id="population" onChange={handleOrderPopulation}>
        <option>Sort by population size</option>
        <option value="Asc">Smallest to largest</option>
        <option value="Desc">Largest to Smallest</option>
      </select>
    </div>
  );
};

export default SortByPopulation;
