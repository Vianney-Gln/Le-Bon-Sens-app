import React, { useState } from "react";
// routing
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
// Pages
import Header from "./pages/Header";
import Productors from "./pages/Productors";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import Events from "./pages/Events";
// style
import "./styles/App.scss";

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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
