import React, { useState } from "react";
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

const App = () => {
  /* ------ about Insert-event component ------- */
  // states
  const [insert, setInsert] = useState(true);

  // function disabling insert
  const disableInsert = () => {
    setInsert(!insert);
  };
  return (
    <div className="container-app">
      <Header />
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
          path="productors"
          element={<Productors disableInsert={disableInsert} insert={insert} />}
        />
        <Route exact path="events" element={<Events />} />
        <Route exact path="find-us" element={<FindUs />} />
        <Route exact path="recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
