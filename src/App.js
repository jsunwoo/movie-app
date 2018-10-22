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
        {movies.map((movie, index) => {
          console.log(movie, index);
          return <Movie title={movie.title} image={movie.image} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
