import React, { createContext, useEffect, useState } from "react";
//service
import { getNamesProductors } from "../services/productors";
import { verifyToken } from "../services/auth";

const productorsContext = createContext(null);

const ProductorsProvider = ({ children }) => {
  //states
  const [productors, setProductors] = useState([]);

  /*getting infos on component mounting
  if user authentificated ---> getting all infos
  else ---> getting only infos with isPublic status to true */
  useEffect(() => {
    const token = localStorage.getItem("token_access_le_bon_sens");
    getNamesProductors()
      .then((result) => {
        verifyToken(token)
          .then((resu) => {
            if (resu.data) {
              setProductors(result);
            } else {
              const visibleResult = result.filter(
                (element) => element.isPublic
              );
              setProductors(visibleResult);
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <productorsContext.Provider value={{ productors, setProductors }}>
      {children}
    </productorsContext.Provider>
  );
};

export { productorsContext, ProductorsProvider };
