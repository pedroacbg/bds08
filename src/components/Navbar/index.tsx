import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-primary nav-container">
      <Link to="/" className="nav-logo">
        <h1>Github API</h1>
      </Link>
    </div>
  );
};

export default Navbar;
