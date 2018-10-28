import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ image, title, genres, synopsis }) {
  return (
    <div>
      <MoviePoster poster={image} />
      <h1>{title}</h1>
      <div>
        {genres.map((gen, index) => (
          <MovieGenre genre={gen} key={index} />
        ))}
      </div>
      {synopsis}
    </div>
  );
}

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} />;
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};

function MovieGenre({ genre }) {
  return <span>{genre}</span>;
}
MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Movie;
