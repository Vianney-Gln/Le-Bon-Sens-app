import React from "react";
// routing
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
// components
import Header from "./pages/Header";
import Productors from "./pages/Productors";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
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
