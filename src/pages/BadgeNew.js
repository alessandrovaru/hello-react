import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import headerBack from "../images/header.jpg";
const BadgeNew = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-container">
        <img src={headerBack} className="img-fluid" alt="header" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstname="Alessandro"
              lastname="Varuzza"
              jobTitle="Frontend developer"
              twitter="@alessandrovaru"
            />
          </div>
          <div className="col">
            <BadgeForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeNew;
