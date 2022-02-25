import React from "react";

const CardsProducts = ({ productName, productPrice, productImage }) => (
  <li>
    <img src={productImage} alt="product" />
    <span>{productName}</span>
    <span>{productPrice}</span>
  </li>
);

export default CardsProducts;
