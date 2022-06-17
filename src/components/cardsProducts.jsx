import React, { useState } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Style
import "../styles/cardProduct.scss";
// Modal
import DetailProductModal from "react-modal/lib/components/Modal";

const CardsProducts = ({
  productName,
  productPrice,
  productImage,
  toManage,
  openModal,
  setIdProductToManage,
  productId,
}) => {
  /* ----- Navigate -----*/
  const navigate = useNavigate();

  /* ----- States variables ------ */
  const [detailProductModalIsOpen, setDetailProductIsOpen] = useState(false); //state Modal

  /* -----Modal for more detail products -----*/
  DetailProductModal.setAppElement("#root");
  // Functions opening or closing Modal
  const openDetailProductModal = () => {
    setDetailProductIsOpen(true);
  };

  const closeDetailProductModal = () => {
    setDetailProductIsOpen(false);
  };
  // style Modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "auto",
      height: "auto",
    },
  };
  return (
    <>
      <DetailProductModal
        isOpen={detailProductModalIsOpen}
        onRequestClose={closeDetailProductModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="onDetailProduct">
          <img src={productImage} alt={productName} />
          <span>{productName}</span>
          <span>{productPrice}</span>
        </div>
      </DetailProductModal>
      <li
        onClick={() => !toManage && openDetailProductModal()}
        className="card"
      >
        <img src={productImage} alt={productName} />
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
    </>
  );
};
export default CardsProducts;
