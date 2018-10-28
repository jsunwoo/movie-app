import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ image, title, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={image} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        {genres.map((gen, index) => (
          <MovieGenre genre={gen} key={index} />
        ))}
        <p className="Movie__synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

function MoviePoster({ poster, alt }) {
  return <img className="Movie__Poster" src={poster} alt={alt} />;
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}</span>;
}

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Movie;
