import React from "react";
// styles
import "../styles/header.scss";

const Header = () => (
  <header className="container-header">
    <div className="container-nav">
      <div className="Logo-shop">
        <h2>Logo</h2>
      </div>
      <nav className="navigation-header">
        <ul className="container-list-header">
          <li>Produits</li>
          <li>Evènements</li>
          <li>Producteurs</li>
          <li>Recettes</li>
          <li>Nous trouver</li>
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
