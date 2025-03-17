import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviePage.scss";

const MoviePage = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div className="movie-page">
      <h1>{movie.title}</h1>
      <video controls width="80%">
        <source src={movie.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MoviePage;