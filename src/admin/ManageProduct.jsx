import React, { useState, useEffect } from "react";
//routing
import { useNavigate } from "react-router-dom";
//style
import "../styles/deleteProduct.scss";
//service
import getProducts, { deleteOneProduct } from "../services/products";
//components
import CardsProducts from "../components/cardsProducts";
//Modal
import Modal from "react-modal";
const ManageProduct = ({ setOperation }) => {
  /*----- navigate -----*/
  const navigate = useNavigate();
  /*----- states -----*/
  const [productsToDelete, setProductsToDelete] = useState([]); //array recieving result.data from service
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal
  const [idToDelete, setIdToDelete] = useState(""); // id to delete
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
    let isMounted = true;
    if (isMounted) {
      getProducts().then((result) => {
        setProductsToDelete(result);
      });
    } else {
      return () => (isMounted = false); //have to cleanup all asynchronous operation on unmount (dev tools fix)
    }
  }, []);

  const runDeleteOneProduct = () => {
    deleteOneProduct(idToDelete)
      .then(() => {
        setSuccessMessage(
          "produit supprimé avec succès! vous serez redirigé..."
        );
        setTimeout(() => {
          closeModal();
          navigate("/products");
          navigate("/admin");
        }, 3000);
      })
      .catch(() => {
        setSuccessMessage(
          "il y a eu une erreur lors de la suppression du produit, vous serez redirigé..."
        );
        setTimeout(() => {
          closeModal();
          navigate("/products");
          navigate("/admin");
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
          {productsToDelete &&
            productsToDelete.map((prod) => (
              <CardsProducts
                key={prod.id}
                productId={prod.id}
                productName={prod.name}
                productPrice={prod.price}
                productImage={prod.urlImage}
                toManage={true}
                openModal={openModal}
                setIdToDelete={setIdToDelete}
                setOperation={setOperation}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default ManageProduct;
