import React from "react";
// components
import Header from "./components/Header";
import Shop from "./components/Shop";
// style
import "./styles/App.scss";

const App = () => (
  <div className="container-app">
    <Header />
    <Shop />
  </div>
);

export default App;
