import React, { useState } from "react";
//Modal
import Modal from "react-modal";

Modal.setAppElement("#root");

const CardsProducts = ({
  productName,
  productPrice,
  productImage,
  toDelete,
}) => {
  /*-----Modal----- */
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  /*----- style Modal ------*/
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "240px",
      height: "160px",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>Etes vous sûr de vouloir supprimer ce produit?</p>
        <div className="container-buttons-modal">
          <button type="button">oui</button>
          <button type="button">non</button>
        </div>
      </Modal>
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
    </>
  );
};
export default CardsProducts;
