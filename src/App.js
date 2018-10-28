import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const allmovie = await this._callApi();
    this.setState({
      movieState: allmovie
    });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(apple => apple.json())
      .then(banana => banana.data.movies)
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const movies = this.state.movieState.map(movie => {
      return (
        <Movie
          title={movie.title}
          image={movie.medium_cover_image}
          key={movie.id}
        />
      );
    });
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movieState ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
