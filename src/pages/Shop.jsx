import React, { useEffect, useState } from "react";
// styles
import "../styles/shop.scss";

// components
import InsertEvent from "../components/InsertEvent";
// service
import getInfosShop from "../services/shop";

const Shop = ({ insert, disableInsert }) => {
  // doc title
  document.title = "Le Bon Sens - Notre Magasin";
  // variables statements
  const [infosShop, setInfosShop] = useState([]);

  // getting infos shop on component mounting
  useEffect(() => {
    getInfosShop().then((infos) => setInfosShop(infos));
  }, []);

  return (
    <div className="container-shop">
      {insert && <InsertEvent disableInsert={disableInsert} />}
      <h1>Notre Magasin</h1>
      {infosShop.description1 && (
        <p className="description">{infosShop.description1}</p>
      )}
      <div className="container-images">
        {infosShop.urlPhoto1 && (
          <div className="image">
            <img src={infosShop.urlPhoto1} alt="magasin" />
          </div>
        )}
        {infosShop.urlPhoto2 && (
          <div className="image">
            <img src={infosShop.urlPhoto2} alt="magasin" />
          </div>
        )}

        {infosShop.urlPhoto3 && (
          <div className="image">
            <img src={infosShop.urlPhoto3} alt="magasin" />
          </div>
        )}
      </div>
      {infosShop.description2 && (
        <p className="description">{infosShop.description2}</p>
      )}
    </div>
  );
};

export default Shop;
