import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(data);
  }, []);

  return (
    <div className="card-container">
      {favorites.map((movie) => (
        <Card key={movie.id} show={movie} />
      ))}
    </div>
  );
}

export default Favorite;
