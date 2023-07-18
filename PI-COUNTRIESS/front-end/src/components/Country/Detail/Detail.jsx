import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById, clean } from "../../../redux/actions"

const Detail = () => {
  const { id_country } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);

  console.log(countryDetail)

  useEffect(() => {
      dispatch(getCountryById(id_country));
    return () => {
      dispatch(clean());
    };
  }, [id_country]);


  return (
    <div>
      <div>
        <img src={countryDetail?.flag_image} alt={countryDetail?.name} />
      </div>

      <div>
        <div>
          <h1>{countryDetail?.name}</h1>
        </div>

        <div>
          <div>
            <label>ID:</label>
            <p>{countryDetail?.id_country}</p>
            <label>Continent:</label>
            <p>{countryDetail?.continent}</p>
            <label>Capital:</label>
            <p>{countryDetail?.capital}</p>
            <label>Subregion:</label>
            <p>{countryDetail?.subregion}</p>
            <label>Area:</label>
            <p>{countryDetail?.area}</p>
            <label>Population:</label>
            <p>{countryDetail?.population}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
