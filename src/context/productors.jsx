import React, { createContext, useEffect, useState } from "react";
//service
import { getNamesProductors } from "../services/productors";

const productorsContext = createContext(null);

const ProductorsProvider = ({ children }) => {
  //states
  const [productors, setProductors] = useState([]);

  //getting infos on component mounting
  useEffect(() => {
    getNamesProductors().then((result) => setProductors(result));
  }, []);

  return (
    <productorsContext.Provider value={{ productors, setProductors }}>
      {children}
    </productorsContext.Provider>
  );
};

export { productorsContext, ProductorsProvider };
