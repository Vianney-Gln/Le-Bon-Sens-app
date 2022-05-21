import React, { useEffect, useState } from "react";
// Style
import "../styles/products.scss";
// Icons sort
import all from "../images/all-products.jpg";
import meat from "../images/meat.jpg";
import vegetables from "../images/vegetables.jpg";
import dairyProducts from "../images/dairy-products.png";
import diversProducts from "../images/divers-products.jpg";
// Component
import CardsProducts from "../components/cardsProducts";
// Service
import getProducts from "../services/products";

const Products = () => {
  /* ----- Doc title ----- */
  document.title = "Le Bon Sens - Nos Produits";

  /* ----- Variables statement -----*/
  const [listProducts, setListProducts] = useState([]);
  const [sortParam, setSortParam] = useState("");
  const [searchParam, setSearchParam] = useState("");

  /* ----- Getting products on mounting component, translate "?" into "€" on rerend on each changement of sortParams or searchParams ----- */
  useEffect(() => {
    getProducts(sortParam, searchParam).then((products) => {
      setListProducts(products);
    });
  }, [sortParam, searchParam]);

  return (
    <div className="container-products">
      <h1>Nos Produits</h1>
      <p className="infos-price">
        Les prix indiqués sont valables en boutique, il n&apos; y a pas
        possibilité d&apos; acheter sur ce site.
      </p>
      <div className="container-sort-products">
        <ul>
          <li
            className={sortParam === "" ? "filter-selected" : ""}
            onClick={() => setSortParam("")}
          >
            <img src={all} alt="all products" />
            <span>Tous les produits</span>
          </li>
          <li
            className={sortParam === "meats" ? "filter-selected" : ""}
            onClick={() => setSortParam("meats")}
          >
            <img src={meat} alt="meat" />
            <span>Viandes</span>
          </li>
          <li
            className={sortParam === "vegetables" ? "filter-selected" : ""}
            onClick={() => setSortParam("vegetables")}
          >
            <img src={vegetables} alt="vegetables" />
            <span>Légumes</span>
          </li>
          <li
            className={sortParam === "dairy products" ? "filter-selected" : ""}
            onClick={() => setSortParam("dairy products")}
          >
            <img src={dairyProducts} alt="dairy products" />
            <span>Produits laitiers</span>
          </li>
          <li
            className={
              sortParam === "other locals products" ? "filter-selected" : ""
            }
            onClick={() => setSortParam("other locals products")}
          >
            <img src={diversProducts} alt="other locals products" />
            <span>Produits divers</span>
          </li>
        </ul>
      </div>
      <div className="container-search-bar">
        <label htmlFor="search">
          <input
            onChange={(e) => setSearchParam(e.target.value)}
            type="text"
            name="search"
            placeholder="rechercher"
          />
        </label>
      </div>
      <div className="container-products">
        <ul className="container-list-products">
          {listProducts.length ? (
            listProducts.map((prod) => (
              <CardsProducts
                key={prod.id}
                productName={prod.name}
                productPrice={prod.price}
                productImage={prod.urlImage}
                productCategory={prod.category}
              />
            ))
          ) : (
            <p className="no-results">Pas de résultats pour cette recherche</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Products;
