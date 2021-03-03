import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import headerBack from "../images/header.jpg";
import { useState } from "react";
import api from "../api";

const BadgeNew = () => {
  const [form, setForm] = useState({
    firstName: "",
    jobTitle: "",
    lastName: "",
    twitter: "",
  });

  const [loading, setLoading] = useState(false);

  const [errores, setError] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading({ loading: true });
    setError(false);
    try {
      await api.badges.create(form);
      setLoading({ loading: false });
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <>
      <div className="hero-container">
        <img src={headerBack} className="img-fluid" alt="header" />
      </div>
      <div className="badges-new-container container">
        <div className="row">
          <div className="col">
            <Badge
              firstname={form.firstName || "Firstname"}
              lastname={form.lastName || "Last name"}
              jobTitle={form.jobTitle || "Jb title"}
              twitter={form.twitter || "Twitter"}
            />
          </div>
          <div className="col">
            <BadgeForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              formValues={form}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
