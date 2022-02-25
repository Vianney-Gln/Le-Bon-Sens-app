import React, { useContext } from "react";
// styles
import "../styles/shop.scss";
// components
import InsertEvent from "../components/InsertEvent";
// context
import { shopContext } from "../context/shop";

const Shop = ({ insert, disableInsert }) => {
  // doc title
  document.title = "Le Bon Sens - Notre Magasin";
  // useContext
  const ShopContext = useContext(shopContext);

  return (
    <div className="container-shop">
      {insert && <InsertEvent disableInsert={disableInsert} />}
      <h1>Notre Magasin</h1>
      {ShopContext.infosShop.description1 && (
        <p className="description">{ShopContext.infosShop.description1}</p>
      )}
      <div className="container-images">
        {ShopContext.infosShop.urlPhoto1 && (
          <div className="image">
            <img src={ShopContext.infosShop.urlPhoto1} alt="magasin" />
          </div>
        )}
        {ShopContext.infosShop.urlPhoto2 && (
          <div className="image">
            <img src={ShopContext.infosShop.urlPhoto2} alt="magasin" />
          </div>
        )}

        {ShopContext.infosShop.urlPhoto3 && (
          <div className="image">
            <img src={ShopContext.infosShop.urlPhoto3} alt="magasin" />
          </div>
        )}
      </div>
      {ShopContext.infosShop.description2 && (
        <p className="description">{ShopContext.infosShop.description2}</p>
      )}
    </div>
  );
};

export default Shop;
