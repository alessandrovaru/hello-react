import logo from "../images/logo.png";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container-fluid">
        <a href="/">
          <img src={logo} className="nav-logo img-fluid" alt="logo" />
          <span className="font-weight-light">React </span>
          <span className="font-weight-bold">Badges</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
