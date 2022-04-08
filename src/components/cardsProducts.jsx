import React from "react";
//routing
import { useNavigate } from "react-router-dom";
//style
import "../styles/cardProduct.scss";

const CardsProducts = ({
  productName,
  productPrice,
  productImage,
  toManage,
  openModal,
  setIdProductToManage,
  productId,
}) => {
  /* ----- navigate -----*/
  const navigate = useNavigate();
  return (
    <li className="card">
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
              setIdProductToManage(productId);
              navigate("/admin/updateProduct");
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
