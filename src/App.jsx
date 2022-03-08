import React, { useState, useEffect } from "react";
// routing
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
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
//service
import { getNamesProductors } from "./services/productors";
import Admin from "./admin/Admin";

const App = () => {
  /* ------ about Insert-event component ------- */
  // states
  const [insert, setInsert] = useState(true);

  // function disabling insert
  const disableInsert = () => {
    setInsert(!insert);
  };

  /* ------ about productors ------*/
  //states
  const [productors, setProductor] = useState([]);
  //getting infos on component mounting
  useEffect(() => {
    getNamesProductors().then((result) => setProductor(result));
  }, []);

  return (
    <div className="container-app">
      <Header productors={productors} />
      <Routes>
        <Route
          exact
          path="products"
          element={<Products disableInsert={disableInsert} insert={insert} />}
        />
        <Route
          exact
          path="/"
          element={<Shop disableInsert={disableInsert} insert={insert} />}
        />
        <Route
          exact
          path="productors/:id"
          element={<Productors disableInsert={disableInsert} insert={insert} />}
        />
        <Route exact path="events" element={<Events />} />
        <Route exact path="find-us" element={<FindUs />} />
        <Route exact path="recipes" element={<Recipes />} />
        <Route exact path="admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
