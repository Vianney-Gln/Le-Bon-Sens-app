import React, { useState } from "react";

const CardsProducts = ({
  productName,
  productPrice,
  productImage,
  toManage,
  openModal,
  setIdToDelete,
  productId,
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
              setIdToDelete(productId);
            }}
            type="button"
          >
            supprimer
          </button>
          <button type="button">modifier</button>
        </div>
      )}
    </li>
  );
};
export default CardsProducts;
