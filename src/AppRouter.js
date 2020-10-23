import React from "react";
import {Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Favourite from "./components/Favourite.js";
import RandomBeer from "./components/RandomBeer.js";

function AppRouter() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/favourite" component={Favourite} />
        <Route path="/randombeer" component={RandomBeer} />
      </Switch>
    </div>
  );
}

export default AppRouter;
