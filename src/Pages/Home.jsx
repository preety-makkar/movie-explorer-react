import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🎬 Movie Explorer</span>

          <h1>
            Discover Your Next
            <span> Favorite Movie</span>
          </h1>

          <p>
            Explore thousands of movies and TV shows. Find ratings, genres,
            summaries and build your own personal watchlist.
          </p>

          <div className="hero-buttons">
            <Link to="/movies" className="primary-btn">
              Browse Movies
            </Link>

            <Link to="/favorite" className="secondary-btn">
              My Favorites
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <span>🔥</span>
          <h3>Trending Shows</h3>
          <p>Discover the most popular and highly rated Movies.</p>
        </div>

        <div className="feature-card">
          <span>⭐</span>
          <h3>Ratings</h3>
          <p>
            Check ratings instantly before adding something to your watchlist.
          </p>
        </div>

        <div className="feature-card">
          <span>❤️</span>
          <h3>Favorites</h3>
          <p>Save movies and shows you love and revisit them anytime.</p>
        </div>
      </section>

      <section className="genres-section">
        <h2>Popular Genres</h2>

        <div className="genres-grid">
          <div>🎭 Drama</div>
          <div>😂 Comedy</div>
          <div>🧙 Fantasy</div>
          <div>🚀 Sci-Fi</div>
          <div>🕵️ Mystery</div>
          <div>⚔️ Action</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
