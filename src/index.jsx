import React from "react";
import ReactDOM from "react-dom";
// routing
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
// context
import { ShopProvider } from "./context/shop";

ReactDOM.render(
  <React.StrictMode>
    <ShopProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopProvider>
  </React.StrictMode>,
  // eslint-disable-next-line comma-dangle
  document.getElementById("root")
);
