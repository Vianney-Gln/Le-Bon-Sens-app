import React, { useContext } from "react";
// Styles
import "../styles/shop.scss";
//Routing
import { useNavigate } from "react-router-dom";
// Context
import { shopContext } from "../context/shop";

const Shop = () => {
  // Doc title
  document.title = "Le Bon Sens - Notre Magasin";
  // UseContext
  const ShopContext = useContext(shopContext);
  // UseNavigate
  const navigate = useNavigate();

  return (
    <div className="container-shop">
      <h1>Notre Magasin</h1>

      {ShopContext.infosShop.description1 && (
        <p className="description">
          {ShopContext.infosShop.description1
            .split("\n")
            .map((element, index) => {
              return (
                <span key={index}>
                  {element}
                  <br />
                </span>
              );
            })}
        </p>
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

      <div className="charte">
        <button type="button" onClick={() => navigate("/find-us")}>
          Contactez nous!
        </button>
      </div>
    </div>
  );
};
export default Shop;
