import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!show) return;

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const val = favorites.some((movie) => movie.id === show.id);

    setIsFavorite(val);
  }, [show]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Movie not found");
        }

        return res.json();
      })
      .then((data) => {
        setShow(data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [id, navigate]);

  if (!show) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  const handleFavorite = () => {
    console.log("clicked");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log(favorites);
    const val = favorites.some((movie) => movie.id === show.id);

    if (val) {
      const updatedFavorites = favorites.filter(
        (movie) => movie.id !== show.id,
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      const updatedFavorites = [...favorites, show];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="movie-details">
      <div className="movie-details-container">
        <div className="movie-poster">
          <img src={show.image?.original} alt={show.name} />
        </div>

        <div className="movie-info">
          <h1>{show.name}</h1>
          <div className="movie-meta">
            <span className="movie-rating">
              ⭐ {show.rating?.average || "N/A"}
            </span>
            <button onClick={handleFavorite} className="favorite-btn">
              {isFavorite ? "❤️ Favorited" : "🤍 Favorite"}
            </button>
          </div>

          <div className="movie-genres">
            {show.genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>

          <div
            className="movie-summary"
            dangerouslySetInnerHTML={{
              __html: show.summary,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
