import React, { useState } from "react";

const CardsProducts = ({
  productName,
  productPrice,
  productImage,
  toDelete,
  openModal,
}) => {
  return (
    <li>
      <img src={productImage} alt="product" />
      <span>{productName}</span>
      <span>{productPrice}</span>
      {toDelete && (
        <button onClick={openModal} type="button">
          supprimer
        </button>
      )}
    </li>
  );
};
export default CardsProducts;
