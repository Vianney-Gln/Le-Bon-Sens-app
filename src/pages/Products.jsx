import React from "react";
import "../styles/products.scss";

// icons sort
import all from "../images/all-products.jpg";
import meat from "../images/meat.jpg";
import vegetables from "../images/vegetables.jpg";
import dairyProducts from "../images/dairy-products.png";
import diversProducts from "../images/divers-products.jpg";
// components
import InsertEvent from "../components/InsertEvent";

const Products = ({ disableInsert, insert }) => {
  // doc title
  document.title = "Le Bon Sens - Nos Produits";

  return (
    <div className="container-products">
      {insert && <InsertEvent disableInsert={disableInsert} />}
      <h1>Nos Produits</h1>
      <div className="container-search-bar">
        <label htmlFor="search">
          <input type="text" name="search" placeholder="search" />
        </label>
      </div>
      <div className="container-sort-products">
        <ul>
          <li>
            <img src={all} alt="all products" />
            <span>Tous les produits</span>
          </li>
          <li>
            <img src={meat} alt="meat" />
            <span>Viandes</span>
          </li>
          <li>
            <img src={vegetables} alt="vegetables" />
            <span>Légumes</span>
          </li>
          <li>
            <img src={dairyProducts} alt="dairyProducts" />
            <span>Produits laitiers</span>
          </li>
          <li>
            <img src={diversProducts} alt="diversProducts" />
            <span>Produits locaux divers</span>
          </li>
        </ul>
      </div>
      <p className="infos-price">
        Les prix indiqués sont valables en boutique, il n&apos; y a pas
        possibilité d&apos; acheter sur ce site.
      </p>
      <div className="container-products">
        <ul className="container-list-products">
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
          <li>
            <img src={diversProducts} alt="product" />
            <span>Choux</span>
            <span>1.48€/kg</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
