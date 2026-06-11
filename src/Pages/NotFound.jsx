import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <div className="overlay">
        <div className="notfound-content">
          <span className="badge">🎬 Movie Explorer</span>

          <div className="error-code">
            <span>4</span>
            <div className="film-reel">
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
            </div>
            <span>4</span>
          </div>

          <h1>Scene Not Found</h1>

          <p>
            Looks like this movie scene was cut from the final release. The page
            you're looking for doesn't exist.
          </p>

          <Link to="/" className="home-btn">
            ⬅ Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
