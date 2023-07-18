import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCountryByName } from "../../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleClick = () => {
    if (name) {
      dispatch(getCountryByName(name))
        navigate(`/detailname/${name}`);
        setName("");
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        name="name"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
