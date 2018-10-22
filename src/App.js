import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const MovieTitles = ["Matrix", "Full Metal Jacket", "Oldboy", "Star Wars"];
const MovieImages = [
  "http://www.gstatic.com/tv/thumb/v22vodart/22804/p22804_v_v8_as.jpg",
  "http://www.gstatic.com/tv/thumb/v22vodart/10114/p10114_v_v8_ab.jpg",
  "http://www.gstatic.com/tv/thumb/v22vodart/35948/p35948_v_v8_ab.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={MovieTitles[0]} image={MovieImages[0]} />
        <Movie title={MovieTitles[1]} image={MovieImages[1]} />
        <Movie title={MovieTitles[2]} image={MovieImages[2]} />
        <Movie title={MovieTitles[3]} image={MovieImages[3]} />
      </div>
    );
  }
}

export default App;
