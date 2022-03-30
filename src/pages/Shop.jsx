import React, { useContext } from "react";
// styles
import "../styles/shop.scss";

// context
import { shopContext } from "../context/shop";

const Shop = () => {
  // doc title
  document.title = "Le Bon Sens - Notre Magasin";
  // useContext
  const ShopContext = useContext(shopContext);

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
        <button type="button">Voir notre charte</button>
      </div>
    </div>
  );
};
export default Shop;
