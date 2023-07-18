import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ id_country, name, flag_image, continent }) => {
  return (
    <div>
      <Link to={`/detail/${id_country}`}>
        <div key={id_country}>
          <p>Name: {name}</p>
          <img src={flag_image} alt={name} />
          <p>Continent: {continent ? continent[0] : "Unknown"}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;