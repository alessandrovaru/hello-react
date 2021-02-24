import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import headerBack from "../images/header.jpg";
const BadgeNew = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src={headerBack} className="img-fluid" alt="header" />
      </div>
      <div className="container">
        <Badge
          firstname="Alessandro"
          lastname="Varuzza"
          jobTitle="Frontend developer"
          twitter="@alessandrovaru"
        />
      </div>
    </div>
  );
};

export default BadgeNew;
