/* eslint-disable indent */

/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from "react";
import "../styles/products.scss";

// icons sort
import all from "../images/all-products.jpg";
import meat from "../images/meat.jpg";
import vegetables from "../images/vegetables.jpg";
import dairyProducts from "../images/dairy-products.png";
import diversProducts from "../images/divers-products.jpg";
// components
import InsertEvent from "../components/InsertEvent";
import CardsProducts from "../components/cardsProducts";

// services
import getProducts from "../services/products";

// utility
import translateEuro from "../utility/utility_functions";

const Products = ({ disableInsert, insert }) => {
  /* ----- doc title ----- */
  document.title = "Le Bon Sens - Nos Produits";

  /* ----- variables statement -----*/
  const [listProducts, setListProducts] = useState([]);
  const [sortParam, setSortParam] = useState("");

  /* ----- getting products on mounting component and translate "?" into "€" ----- */
  useEffect(() => {
    getProducts().then((products) => {
      products.forEach((product) => {
        if (product.price) {
          product.price = translateEuro(product.price);
        }
      });
      setListProducts(products);
    });
  }, []);

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
          <li onClick={() => setSortParam("all products")}>
            <img src={all} alt="all products" />
            <span>Tous les produits</span>
          </li>
          <li onClick={() => setSortParam("meat")}>
            <img src={meat} alt="meat" />
            <span>Viandes</span>
          </li>
          <li onClick={() => setSortParam("vegetables")}>
            <img src={vegetables} alt="vegetables" />
            <span>Légumes</span>
          </li>
          <li onClick={() => setSortParam("dairyProducts")}>
            <img src={dairyProducts} alt="dairyProducts" />
            <span>Produits laitiers</span>
          </li>
          <li onClick={() => setSortParam("other locals products")}>
            <img src={diversProducts} alt="other locals products" />
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
          {listProducts
            ? listProducts.map((prod) => (
                <CardsProducts
                  key={prod.id}
                  productName={prod.name}
                  productPrice={prod.price}
                  productImage={prod.urlImage}
                  productCategory={prod.category}
                />
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default Products;
