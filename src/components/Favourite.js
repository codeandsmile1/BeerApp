import React, { Component } from "react";
import Beer from "./Beer";
import '../styles/Favourite.css'

class Favourite extends Component {
  constructor(props) {
    super(props);
    let beers = JSON.parse(localStorage.getItem("beers"));

    this.state = {
      favouriteBeers: beers
    };      

  this.setState({ favouriteBeers: beers});
  }
  
  render() {
    return (
      <div>
         <h1  className="title">Favourite Beers</h1>
      <div className="favourite-beers">
        {this.state.favouriteBeers.map((p) => (
          <Beer {...p} />
        ))}
      </div>
      </div>
    );
  }
}

export default Favourite;
