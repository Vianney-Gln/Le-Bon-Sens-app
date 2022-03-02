import React, { createContext, useState } from "react";

const shopContext = createContext(null);

const ShopProvider = ({ children }) => {
  const [infosShop, setInfosShop] = useState([]);

  return (
    <shopContext.Provider value={{ infosShop, setInfosShop }}>
      {children}
    </shopContext.Provider>
  );
};

export { shopContext, ShopProvider };
