import React, { useState } from "react";

const CardsProducts = ({
  productName,
  productPrice,
  productImage,
  toManage,
  openModal,
  setIdProductToManage,
  productId,
  setOperation,
}) => {
  return (
    <li>
      <img src={productImage} alt="product" />
      <span>{productName}</span>
      <span>{productPrice}</span>
      {toManage && (
        <div className="container-buttons-delete-update">
          <button
            onClick={() => {
              openModal();
              setIdProductToManage(productId);
            }}
            type="button"
          >
            supprimer
          </button>
          <button
            type="button"
            onClick={() => {
              setOperation("updateProduct");
            }}
          >
            modifier
          </button>
        </div>
      )}
    </li>
  );
};
export default CardsProducts;
