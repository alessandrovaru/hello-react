import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import headerBack from "../images/header.jpg";
import { useState } from "react";

const BadgeNew = () => {
  const [form, setForm] = useState({
    firstName: "",
    jobTitle: "",
    lastName: "",
    twitter: "",
  });
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <div className="hero-container">
        <img src={headerBack} className="img-fluid" alt="header" />
      </div>
      <div className="badges-new-container container">
        <div className="row">
          <div className="col">
            <Badge
              firstname={form.firstName}
              lastname={form.lastName}
              jobTitle={form.jobTitle}
              twitter={form.twitter}
            />
          </div>
          <div className="col">
            <BadgeForm onChange={handleChange} formValues={form} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
