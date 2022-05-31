import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h2>Desafio Github API</h2>
          <p>Bootcamp Spring React - DevSuperior</p>
          <Link to="/search">
            <Button text="Começar" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
