import confLogo from "../images/header.jpg";
import "./styles/Badge.css";
const Badge = () => {
  return (
    <div className="badge-container">
      <div className="badge-header">
        <img
          className="badge-header-fondo img-fluid"
          src={confLogo}
          alt="logo"
        />
      </div>
      <div>
        <h1>
          Alessandro <br /> Varuzza
        </h1>
      </div>
      <div>
        <p>Frontend developer</p>
        <a href="">@alessandrovaru</a>
      </div>
      <div>
        <p>#ReactBadges</p>
      </div>
    </div>
  );
};

export default Badge;
