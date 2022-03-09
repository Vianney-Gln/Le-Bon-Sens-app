import React from "react";

const CardsProducts = ({
  productName,
  productPrice,
  productImage,
  toDelete,
}) => (
  <li>
    <img src={productImage} alt="product" />
    <span>{productName}</span>
    <span>{productPrice}</span>
    {toDelete && <button type="button">supprimer</button>}
  </li>
);

export default CardsProducts;
