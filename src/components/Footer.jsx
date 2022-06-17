import React from "react";
// Routing
import { Link } from "react-router-dom";
// Styles
import "../styles/footer.scss";

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>
          <Link to="/">Le Magasin |</Link>
        </li>
        <li>
          <Link to="/products">Nos Produits |</Link>
        </li>
        <li>
          <Link to="/events">Evénements |</Link>
        </li>
        <li>
          <Link to="/recipes">Recettes |</Link>
        </li>
        <li>
          <Link to="/find-us">Nous contacter</Link>
        </li>
      </ul>
    </nav>
    <p className="copyright">
      © Copyright 2022 - Vianney Geloen. Tous droits réservés.
    </p>
  </footer>
);

export default Footer;
