import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Movies() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getShows() {
    setLoading(true);

    const randomPage = Math.floor(Math.random() * 10);

    const res = await fetch(`https://api.tvmaze.com/shows?page=${randomPage}`);

    const data = await res.json();

    const start = Math.floor(Math.random() * (data.length - 20));

    setShows(data.slice(start, start + 20));

    setLoading(false);
  }

  useEffect(() => {
    getShows();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="hero-buttons">
        <button className="primary-btn load-btn" onClick={getShows}>
          Discover More 🎬
        </button>
      </div>

      <div className="card-container">
        {shows.map((show) => (
          <Card key={show.id} show={show} />
        ))}
      </div>
    </>
  );
}

export default Movies;
