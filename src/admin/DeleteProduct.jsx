import React, { useState, useEffect } from "react";
//style
import "../styles/deleteProduct.scss";
//service
import getProducts from "../services/products";
//components
import CardsProducts from "../components/cardsProducts";
//Modal
import Modal from "react-modal";
const DeleteProduct = () => {
  /*----- states -----*/
  const [productsToDelete, setProductsToDelete] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal
  /* -----Modal -----*/
  Modal.setAppElement("#root");
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  //style Modal
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

  /*----- getting all products on component mounting -----*/
  useEffect(() => {
    getProducts().then((result) => {
      setProductsToDelete(result);
    });
  }, []);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>Etes vous sûr de vouloir supprimer ce produit?</p>
        <div className="container-buttons-modal">
          <button type="button" onClick={() => console.log("coucou")}>
            oui
          </button>
          <button type="button">non</button>
        </div>
      </Modal>
      <h3>Supprimer un produit</h3>
      <div className="container-products-to-delete">
        <ul className="container-list-products-to-delete">
          {productsToDelete &&
            productsToDelete.map((prod) => (
              <CardsProducts
                key={prod.id}
                productName={prod.name}
                productPrice={prod.price}
                productImage={prod.urlImage}
                toDelete={true}
                openModal={openModal}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default DeleteProduct;
