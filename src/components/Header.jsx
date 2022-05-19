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
// Hamburger React
import Hamburger from "hamburger-react";
// Service
import getInfosEvents from "../services/events";

const Header = () => {
  // UseContext
  const ShopContext = useContext(shopContext);
  const ProductorsContext = useContext(productorsContext);

  // States
  const [isOpen, setOpen] = useState(false); // variable statement hamburger react
  const [openProductors, setOpenProductors] = useState(false); // variable statement on click on productors( display the list of productors)
  const [currEvents, setCurrEvents] = useState([]); // state managing the display of insert event

  // Function handling display of list productors on click
  const handleListProductors = () => {
    setOpenProductors(!openProductors);
  };

  window.onresize = () => setOpen(false); // If user change the size of the viewport ===> close burger
  window.addEventListener("scroll", () => setOpenProductors(false)); // If the user is scrolling ====> close burger

  // Useffect ---> called service event to check if there is current events

  useEffect(() => {
    getInfosEvents().then((result) => {
      const currentsEvents = result.filter((curr) => curr.isCurrent);
      setCurrEvents(currentsEvents);
    });
  }, []);

  return (
    <header className="container-header">
      <div className="container-nav">
        <div className="Logo-shop">
          <Link to="/">
            <img src={logo} alt="le bon sens" />
          </Link>
          <div className="hamburger-react">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
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
              <li>Nous contacter</li>
            </Link>
          </ul>
        </nav>
      </div>
      {!isOpen ? (
        <>
          <div className="title-shop">
            {ShopContext.infosShop.name && (
              <h1>{ShopContext.infosShop.name}</h1>
            )}
          </div>
          <div className="schedules">
            {ShopContext.infosShop.schedule && (
              <p>{ShopContext.infosShop.schedule}</p>
            )}
          </div>
        </>
      ) : (
        <nav className="nav-mobil">
          <ul className="list-top">
            <Link to="products">
              <li>Produits</li>
            </Link>
            <Link to="events">
              <li>Evènements</li>
            </Link>
            <li
              onClick={() => handleListProductors()}
              className="tab-productor"
            >
              Producteurs
              {openProductors && (
                <ul className="list-productor">
                  {ProductorsContext.productors &&
                    ProductorsContext.productors.map((productor) => {
                      <Link
                        key={productor.id}
                        to={`productors/${productor.id}`}
                      >
                        <li>{productor.name}</li>
                      </Link>;
                    })}
                </ul>
              )}
            </li>
          </ul>
          <ul className="list-bottom">
            <Link to="recipes">
              <li>Recettes</li>
            </Link>
            <Link to="find-us">
              <li>Nous contacter</li>
            </Link>
          </ul>
        </nav>
      )}
      {currEvents.length ? <InsertEvent setCurrEvents={setCurrEvents} /> : ""}
    </header>
  );
};

export default Header;
