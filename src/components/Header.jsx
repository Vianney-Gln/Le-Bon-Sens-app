import React, { useEffect, useState } from "react";
// routing
import { Link } from "react-router-dom";
// styles
import "../styles/header.scss";
// service
import getInfosShop from "../services/shop";

const Header = () => {
  // variables statements
  const [mainInfosShop, setMainInfosShop] = useState([]);
  // getting infos shop
  useEffect(() => {
    getInfosShop().then((res) => {
      setMainInfosShop(res);
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
        {mainInfosShop.name && <h1>{mainInfosShop.name}</h1>}
      </div>
      <div className="schedules">
        {mainInfosShop.schedule && <p>{mainInfosShop.schedule}</p>}
      </div>
    </header>
  );
};

export default Header;
