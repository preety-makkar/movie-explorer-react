import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Favorite from "./Pages/Favorite";
import MovieDetails from "./Pages/MovieDetails";
import NotFound from "./Pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
