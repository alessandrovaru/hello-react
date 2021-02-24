import confLogo from "../images/header.jpg";
import "./styles/Badge.css";

const Badge = ({ firstname, lastname, jobTitle, twitter }) => {
  return (
    <div className="badge-container">
      <div className="badge-header">
        <img
          className="badge-header-fondo img-fluid"
          src={confLogo}
          alt="logo"
        />
      </div>
      <div className="badge-body">
        <div className="badge-name-container">
          <h1>
            {firstname} <br /> {lastname}
          </h1>
        </div>
        <div className="badge-info-container">
          <p>{jobTitle}</p>
          <a href="https://github.com/alessandrovaru">{twitter}</a>
        </div>
        <div className="badge-footer">
          <p>#ReactBadges</p>
        </div>
      </div>
    </div>
  );
};

export default Badge;
