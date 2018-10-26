import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ image, title }) {
  return (
    <div>
      <MoviePoster poster={image} />
      <h1>{title}</h1>
    </div>
  );
}

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

function MoviePoster({ poster }) {
  return <img src={poster} />;
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};

export default Movie;
