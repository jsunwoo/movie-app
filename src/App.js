import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const Movies = ["Matrix", "Full Metal Jacket", "Oldboy", "Star Wars"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={Movies[0]} />
        <Movie title={Movies[1]} />
        <Movie title={Movies[2]} />
        <Movie title={Movies[3]} />
      </div>
    );
  }
}

export default App;
