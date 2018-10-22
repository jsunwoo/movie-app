import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "Matrix",
    image: "http://www.gstatic.com/tv/thumb/v22vodart/22804/p22804_v_v8_as.jpg"
  },
  {
    title: "Full Metal Jacket",
    image: "http://www.gstatic.com/tv/thumb/v22vodart/10114/p10114_v_v8_ab.jpg"
  },
  {
    title: "Oldboy",
    image: "http://www.gstatic.com/tv/thumb/v22vodart/35948/p35948_v_v8_ab.jpg"
  },
  {
    title: "Star Wars",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movies[0].title} image={movies[0].image} />
        <Movie title={movies[1].title} image={movies[1].image} />
        <Movie title={movies[2].title} image={movies[2].image} />
        <Movie title={movies[3].title} image={movies[3].image} />
      </div>
    );
  }
}

export default App;
