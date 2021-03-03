import headerBack from "../images/header.jpg";
import BadgesList from "../components/BadgesList";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../api";

const Badges = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState({
    loading: true,
  });

  const [error, setError] = useState({
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log("kk");

      setLoading({ loading: true });
      setError({ error: null });

      try {
        const response = await api.badges.list();

        setLoading({ loading: false });
        console.log(loading);
        console.log();
        console.log(response);
        setData(response);
      } catch (error) {
        setLoading({ loading: false });
        setError({ error: error });
      }
    };
    fetchData();
  }, []);

  if (loading === true) {
    return "Loading...";
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
