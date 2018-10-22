import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg" />
    );
  }
}

export default Movie;
