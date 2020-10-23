import React, { Component } from "react";
import "../styles/Beer.css";
import UIfx from "uifx";
import sound from "../sounds/Straw.mp3";
import { FaRegStar } from "react-icons/fa";

const beep = new UIfx(sound, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      img: "",
      description: "",
      favouriteColor: ""
    };

    this.getFavourite = this.getFavourite.bind(this);
  }

  getFavourite = () => {
    document.getElementById("favourite").style.color = "red";

    this.setState({
      name: this.props.name,
      img: this.props.image_url,
      description: this.props.description,
      favouriteColor: "red"
    });

    let beers = [];

    let beer = {
      name: this.props.name,
      img: this.props.image_url,
      description: this.props.description
    };

    let localbeer = JSON.parse(localStorage.getItem("beers"));

    if (localbeer === null) {
      beers.push(beer);
      localStorage.setItem("beers", JSON.stringify(beers));
    } else {
      localbeer.push(beer);
      localStorage.setItem("beers", JSON.stringify(localbeer));      
    }
}

  onPlay() {
    beep.setVolume(0.8);
    beep.play();
  }

  render() {
    return (
      <div className="container" onClick={this.getFavourite}>
        <img
          className="img-beer"
          onClick={this.onPlay}
          src={this.props.image_url}
          alt="beer"
        />
        <div className="beer">
          <div id="favourite" style={{color:this.state.favouriteColor}}>
            <FaRegStar />
          </div>
          <div className="title-beer">{this.props.name}</div>
          <p className="description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Beer;
