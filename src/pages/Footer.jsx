import React from "react";
// styles
import "../styles/footer.scss";

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>Le Magasin |</li>
        <li>Nos Produits |</li>
        <li>Nos Producteurs associés |</li>
        <li>Recettes |</li>
        <li>Plan de Site</li>
      </ul>
    </nav>
    <p className="copyright">
      © Copyright 2022 - Vianney Geloen. Tous droits réservés.
    </p>
  </footer>
);

export default Footer;
