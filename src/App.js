import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Navigation from "./components/Navigation.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
