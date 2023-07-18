import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div>
        <h2>Welcome to Countries</h2>
        <p>
          Explore the countries of the world and plan your tourist activities
        </p>
      </div>
      <Link to="/home">
        <button>Access</button>
      </Link>
    </div>
  );
};

export default Landing;
