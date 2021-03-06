import React, { useEffect, useContext, useState } from "react";
// Routing
import { Link } from "react-router-dom";
// Style
import "../styles/header.scss";
// Context
import { shopContext } from "../context/shop";
import { productorsContext } from "../context/productors";
// Components
import InsertEvent from "./InsertEvent";
import logo from "../images/logo-le-bon-sens.png";
import MenuMobile from "./MenuMobile";

// Service
import getInfosEvents from "../services/events";

const Header = () => {
  // UseContext
  const ShopContext = useContext(shopContext);
  const ProductorsContext = useContext(productorsContext);

  // States
  const [currEvents, setCurrEvents] = useState([]); // state managing the display of insert event

  // Useffect ---> called service event to check if there is current events

  useEffect(() => {
    getInfosEvents().then((result) => {
      const currentsEvents = result.filter((curr) => curr.isCurrent);
      setCurrEvents(currentsEvents);
    });
  }, []);

  return (
    <header className="container-header">
      <div className="burger-menu">{<MenuMobile />}</div>
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
                {ProductorsContext.productors &&
                  ProductorsContext.productors.map((productor) => (
                    <Link to={`productors/${productor.id}`} key={productor.id}>
                      <li>{productor.name}</li>
                    </Link>
                  ))}
              </ul>
            </li>
            <Link to="recipes">
              <li>Recettes</li>
            </Link>
            <Link to="find-us">
              <li>Nous contacter</li>
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

      {currEvents.length ? <InsertEvent setCurrEvents={setCurrEvents} /> : ""}
    </header>
  );
};

export default Header;
