import React, { useState, useEffect } from "react";
// routing
import { Route, Routes } from "react-router-dom";
//components
import Footer from "./components/Footer";
import Login from "./authentification/Login";
import ProtectedRoute from "./components/ProtectedRoute";
// Pages
import Header from "./components/Header";
import Productors from "./pages/Productors";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import Events from "./pages/Events";
// style
import "./styles/App.scss";
import FindUs from "./pages/FindUs";
import Recipes from "./pages/Recipes";
import Page404 from "./pages/Page404";

const App = () => {
  /* ------ about Insert-event component ------- */
  // states
  const [insert, setInsert] = useState(true); //state display the insert event

  // function disabling insert
  const disableInsert = () => {
    setInsert(!insert);
  };

  return (
    <div className="container-app">
      <Header insert={insert} disableInsert={disableInsert} />
      <Routes>
        <Route exact path="products" element={<Products />} />
        <Route exact path="/" element={<Shop />} />
        <Route exact path="productors/:id" element={<Productors />} />
        <Route exact path="events" element={<Events setInsert={setInsert} />} />
        <Route exact path="find-us" element={<FindUs />} />
        <Route exact path="recipes" element={<Recipes />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="login/:operation" element={<Login />} />
        <Route exact path="admin" element={<ProtectedRoute />} />
        <Route exact path="admin/:operation" element={<ProtectedRoute />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
