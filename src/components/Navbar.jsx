import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          navigate("/not-found");
        } else {
          navigate(`/movies/${data[0].show.id}`);
        }
      })
      .finally(() => {
        setQuery("");
      });
  };

  return (
    <div className="nav">
      <h3 onClick={() => navigate("/")}>🎬 Movie Explorer</h3>

      <form className="form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" className="submit">
          Go
        </button>
      </form>

      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/favorite">Favorites</Link>
      </div>
    </div>
  );
}

export default Navbar;
