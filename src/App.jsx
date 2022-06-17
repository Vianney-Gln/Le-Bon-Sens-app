import React from "react";
// Routing
import { Route, Routes } from "react-router-dom";
// Components
import Footer from "./components/Footer";
import Login from "./authentification/Login";
import ProtectedRoute from "./components/ProtectedRoute";
// Pages
import Header from "./components/Header";
import Productors from "./pages/Productors";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import Events from "./pages/Events";
import FindUs from "./pages/FindUs";
import Recipes from "./pages/Recipes";
import Page404 from "./pages/Page404";
// Style
import "./styles/App.scss";

const App = () => {
  return (
    <div className="container-app">
      <Header />
      <Routes>
        <Route exact path="products" element={<Products />} />
        <Route exact path="/" element={<Shop />} />
        <Route exact path="productors/:id" element={<Productors />} />
        <Route exact path="events" element={<Events />} />
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
