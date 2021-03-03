import headerBack from "../images/header.jpg";
import BadgesList from "../components/BadgesList";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

const Badges = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [errores, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await api.badges.list();

      setLoading({ loading: false });
      console.log(loading);
      console.log(response);
      setData(response);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading === true) {
    return <PageLoading />;
  }

  if (errores) {
    return <PageError error={errores.message} />;
  }

  return (
    <>
      <div className="hero-container">
        <img src={headerBack} className="img-fluid" alt="header" />
      </div>
      <div className="badges-container">
        <div className="badgeButtons">
          <Link to="/badges/new">
            <button className="btn btn-primary">new Badge</button>
          </Link>
        </div>
        <div className="badge-list-container">
          <BadgesList badgeData={data} />
        </div>
      </div>
    </>
  );
};

export default Badges;
