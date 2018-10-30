import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ image, title, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={image} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((gen, index) => (
            <MovieGenre genre={gen} key={index} />
          ))}
        </div>
        <div className="Movie__Synopsis">
          <p>{synopsis}</p>
        </div>
      </div>
    </div>
  );
}

function MoviePoster({ poster, alt }) {
  return <img className="Movie__Poster" src={poster} alt={alt} title={alt} />;
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre} </span>;
}

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Movie;
