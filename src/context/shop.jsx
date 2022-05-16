import React, { createContext, useState, useEffect } from "react";
// service
import getInfosShop from "../services/shop";

const shopContext = createContext(null);

const ShopProvider = ({ children }) => {
  const [infosShop, setInfosShop] = useState([]);

  // Getting infos shop and store them in te shop context
  useEffect(() => {
    getInfosShop().then((res) => {
      setInfosShop(res);
    });
  }, []);

  return (
    <shopContext.Provider value={{ infosShop, setInfosShop }}>
      {children}
    </shopContext.Provider>
  );
};

export { shopContext, ShopProvider };
