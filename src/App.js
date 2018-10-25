import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            image:
              "http://www.gstatic.com/tv/thumb/v22vodart/22804/p22804_v_v8_as.jpg"
          },
          {
            title: "Full Metal Jacket",
            image:
              "http://www.gstatic.com/tv/thumb/v22vodart/10114/p10114_v_v8_ab.jpg"
          },
          {
            title: "Oldboy",
            image:
              "http://www.gstatic.com/tv/thumb/v22vodart/35948/p35948_v_v8_ab.jpg"
          },
          {
            title: "Star Wars",
            image:
              "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
          },
          {
            title: "Trainspotting",
            image:
              "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Trainspotting_ver2.jpg/250px-Trainspotting_ver2.jpg"
          }
        ]
      });
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} image={movie.image} key={index} />;
    });
    return movies
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "state is empty"}
      </div>
    );
  }
}

export default App;
