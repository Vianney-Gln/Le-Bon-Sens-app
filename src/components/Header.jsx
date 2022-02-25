import React from "react";
// routing
import { Link } from "react-router-dom";
// styles
import "../styles/header.scss";

const Header = () => (
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
      <h1>Le Bon Sens</h1>
    </div>
    <div className="schedules">
      <p>Ouvert du Lundi au Vendredi de 8H à 17H</p>
    </div>
  </header>
);

export default Header;
