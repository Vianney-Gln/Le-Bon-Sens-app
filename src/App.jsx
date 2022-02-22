import React from "react";
// routing
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
// components
import Header from "./components/Header";
import Productors from "./components/Productors";
import Products from "./components/Products";
import Shop from "./components/Shop";
// style
import "./styles/App.scss";

const App = () => (
  <div className="container-app">
    <Header />
    <Routes>
      <Route exact path="products" element={<Products />} />
      <Route exact path="/" element={<Shop />} />
      <Route exact path="productors" element={<Productors />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
