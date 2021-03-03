import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import headerBack from "../images/header.jpg";
import { useState } from "react";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import { useHistory } from "react-router-dom";

const BadgeNew = () => {
  let history = useHistory();
  const [form, setForm] = useState({
    firstName: "",
    jobTitle: "",
    lastName: "",
    twitter: "",
  });

  const [loading, setLoading] = useState(false);

  const [errores, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await api.badges.create(form);
      await setLoading({ loading: false });

      history.push("/badges");
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error.message);
    }
  };

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  if (loading === true) {
    return <PageLoading />;
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
              error={errores.message}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
