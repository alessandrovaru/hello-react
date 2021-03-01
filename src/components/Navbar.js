import logo from "../images/logo.png";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container-fluid">
        <Link to="/badges">
          <img src={logo} className="nav-logo img-fluid" alt="logo" />
          <span className="font-weight-light">React </span>
          <span className="font-weight-bold">Badges</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
