import React from "react";
import "../styles/products.scss";

// icons sort
import all from "../images/all-products.jpg";
import meat from "../images/meat.jpg";
import vegetables from "../images/vegetables.jpg";
import dairyProducts from "../images/dairy-products.png";
import diversProducts from "../images/divers-products.jpg";

const Products = () => {
  // doc title
  document.title = "Le Bon Sens - Nos Produits";
  return (
    <div className="container-products">
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
  );
};

export default Products;
