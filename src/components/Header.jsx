import React, { useEffect, useContext } from "react";
// routing
import { Link } from "react-router-dom";
// styles
import "../styles/header.scss";
// service
import getInfosShop from "../services/shop";
// context
import { shopContext } from "../context/shop";
//components
import InsertEvent from "./InsertEvent";
import logo from "../images/logo-le-bon-sens.png";

const Header = ({ productors, insert, disableInsert }) => {
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
            <img src={logo} alt="le bon sens" />
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

            <li className="tab-productor">
              Producteurs
              <ul className="list-productor">
                {productors &&
                  productors.map((productor) => (
                    <Link key={productor.id} to={`productors/${productor.id}`}>
                      <li>{productor.name}</li>
                    </Link>
                  ))}
              </ul>
            </li>

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
      {insert && <InsertEvent disableInsert={disableInsert} />}
    </header>
  );
};

export default Header;
