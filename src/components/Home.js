import React, { Component } from "react";
import Beer from "./Beer";
import "../styles/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }
  getBeer() {
    /* fetch("https://api.punkapi.com/v2/beers")
     .then((response) => response.json())
       .then((data) => this.setState({ beers: data })); */
   // Fetch does not work in IE and some Mobile Versions of the Browsers

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        this.setState({ beers: JSON.parse(xhttp.responseText) });
      }
    };

    xhttp.open("GET", "https://api.punkapi.com/v2/beers", true);
    xhttp.send();
  }
  componentDidMount = () => this.getBeer();

  searchBeer = () => {
    const searchBeers = [];
    let beers = this.state.beers;
    let inputValue = document.getElementById("input").value;

    for (let i = 0; i < beers.length; i++) {
      if (beers[i].name.toLowerCase().includes(inputValue.toLowerCase())) {
        searchBeers.push(beers[i]);
        this.setState({ beers: searchBeers });
       } else {
           if(searchBeers.length === 0) {
          document.querySelector(".message").style.display="block";
          document.querySelector(".beers").style.display ="none";
           }
       }
    }
  };

  render() {
    return (
      <div>
        <div className="search">
          <form>
            <input type="text" id="input" placeholder="Search for beers..." />
            <button
              type="button"
              className="searchButton"
              onClick={this.searchBeer}
            >
              Search
            </button>
          </form>
        </div>
        <div className="beers">
          {this.state.beers.map((p, index) => (
            <Beer {...p} index={index} key={p.id} />
          ))}       
        </div>
        <h1 className="message">There is no this kind of beer!:)</h1>
      </div>
    );
  }
}

export default Home;
