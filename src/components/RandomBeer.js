import React, { Component } from "react";
import Beer from "./Beer";
import "../styles/RandomBeer.css";

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeers: [],
    };
  }

  getRandomBeer = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        this.setState({ randomBeers: JSON.parse(xhttp.responseText) });
      }
    };

    xhttp.open("GET", "https://api.punkapi.com/v2/beers/random", true);
    xhttp.send();
  };

  render() {
    return (
      <div className="randomBeers-container">
        <button
          type="button"
          onClick={this.getRandomBeer}
          className="randomBeerBtn"
        >
          Choose Random Beer
        </button>
        <div className="randomBeer">
          {this.state.randomBeers.map((p) => (
            <Beer {...p} key={p.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default RandomBeer;
