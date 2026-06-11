import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ show }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/movies/${show.id}`)} className="card">
      <img src={show.image?.medium} alt={show.name} />

      <div className="card-content">
        <h2>{show.name}</h2>

        <p>⭐ {show.rating?.average || "N/A"}</p>
      </div>
    </div>
  );
}

export default Card;
