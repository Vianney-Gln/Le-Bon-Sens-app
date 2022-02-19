import React from "react";
import Footer from "./components/Footer";
// components
import Header from "./components/Header";
import Productors from "./components/Productors";
// import Products from "./components/Products";
// import Shop from "./components/Shop";
// style
import "./styles/App.scss";

const App = () => (
  <div className="container-app">
    <Header />
    {/* <Products /> */}
    {/* <Shop /> */}
    <Productors />
    <Footer />
  </div>
);

export default App;
