import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryByName, clean } from "../../../redux/actions";

const DetailName = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const countryName = useSelector((state) => state.countryName);

  console.log(countryName)

  useEffect(() => {
      dispatch(getCountryByName(name));
    return () => {
      dispatch(clean());
    };
  }, [name]);


  return (
    <div>
      <div>
        <img src={countryName?.flag_image} alt={countryName?.name} />
      </div>

      <div>
        <div>
          <h1>{countryName?.name}</h1>
        </div>

        <div>
          <div>
            <label>ID:</label>
            <p>{countryName?.id_country}</p>
            <label>Continent:</label>
            <p>{countryName?.continent}</p>
            <label>Capital:</label>
            <p>{countryName?.capital}</p>
            <label>Subregion:</label>
            <p>{countryName?.subregion}</p>
            <label>Area:</label>
            <p>{countryName?.area}</p>
            <label>Population:</label>
            <p>{countryName?.population}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailName;