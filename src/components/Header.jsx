import React, { useEffect, useContext } from "react";
// routing
import { Link } from "react-router-dom";
// styles
import "../styles/header.scss";
// service
import getInfosShop from "../services/shop";
// context
import { shopContext } from "../context/shop";

const Header = () => {
  // useContext
  const ShopContext = useContext(shopContext);

  // getting infos shop and store them in te shop context
  useEffect(() => {
    getInfosShop().then((res) => {
      ShopContext.setInfosShop(res);
    });
  }, []);

  return (
    <header className="container-header">
      <div className="container-nav">
        <div className="Logo-shop">
          <Link to="/">
            <h2>Logo</h2>
          </Link>
        </div>
        <nav className="navigation-header">
          <ul className="container-list-header">
            <Link to="products">
              <li>Produits</li>
            </Link>
            <Link to="events">
              <li>Evènements</li>
            </Link>
            <Link to="productors">
              <li>Producteurs</li>
            </Link>
            <Link to="recipes">
              <li>Recettes</li>
            </Link>
            <Link to="find-us">
              <li>Nous trouver</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="title-shop">
        {ShopContext.infosShop.name && <h1>{ShopContext.infosShop.name}</h1>}
      </div>
      <div className="schedules">
        {ShopContext.infosShop.schedule && (
          <p>{ShopContext.infosShop.schedule}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
