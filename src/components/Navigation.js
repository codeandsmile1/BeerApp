import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'
 
class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
          <div>
          <NavLink
            to="/home" className="title-nav">
            Beans Love Beers
          </NavLink>
          </div>
          <div>
          <ul>
            <li>
            <NavLink
            to="/favourite" >
            Favourite
          </NavLink>
            </li>
            <li>
            <NavLink
            to="/randombeer" >
           Random Beer
          </NavLink>
            </li>
            <li>
            <NavLink
            to="/home" >
            Home
          </NavLink>
            </li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Navigation;