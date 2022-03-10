import React, { useState, useEffect } from "react";

//style
import "../styles/deleteProduct.scss";
//service
import getProducts, { deleteOneProduct } from "../services/products";
//components
import CardsProducts from "../components/cardsProducts";
//Modal
import Modal from "react-modal";
const ManageProduct = ({
  setOperation,
  setIdProductToManage,
  idProductToManage,
}) => {
  /*----- states -----*/
  const [productsToManage, setProductsToManage] = useState([]); //array recieving result.data from service
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal
  const [successMessage, setSuccessMessage] = useState("");
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
      setProductsToManage(result);
    });
    return () => {
      setIdProductToManage([]);
    };
  }, []);

  const runDeleteOneProduct = () => {
    deleteOneProduct(idProductToManage)
      .then(() => {
        setSuccessMessage(
          "produit supprimé avec succès! vous serez redirigé..."
        );
        setTimeout(() => {
          closeModal();
          setOperation("addProduct");
        }, 3000);
      })
      .catch(() => {
        setSuccessMessage(
          "il y a eu une erreur lors de la suppression du produit, vous serez redirigé..."
        );
        setTimeout(() => {
          closeModal();
          setOperation("addProduct");
        }, 3000);
      });
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!successMessage && (
          <p>Etes vous sûr de vouloir supprimer ce produit?</p>
        )}
        {!successMessage && (
          <div className="container-buttons-modal">
            <button type="button" onClick={() => runDeleteOneProduct()}>
              oui
            </button>
            <button type="button" onClick={() => closeModal()}>
              non
            </button>
          </div>
        )}
        {successMessage && <p>{successMessage}</p>}
      </Modal>
      <h3>Gérer les produits</h3>
      <div className="container-products-to-delete">
        <ul className="container-list-products-to-delete">
          {productsToManage &&
            productsToManage.map((prod) => (
              <CardsProducts
                key={prod.id}
                productId={prod.id}
                productName={prod.name}
                productPrice={prod.price}
                productImage={prod.urlImage}
                toManage={true}
                openModal={openModal}
                setIdProductToManage={setIdProductToManage}
                setOperation={setOperation}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default ManageProduct;
