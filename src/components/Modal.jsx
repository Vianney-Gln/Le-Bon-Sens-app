import React, { useState } from "react";
// Modal
import Modal from "react-modal";
// Services
import { deleteOneItemCarrouselById } from "../services/productors";
import { deleteOneProduct } from "../services/products";
import { deleteOneEventById } from "../services/events";
import { deleteOneRecipeById } from "../services/recipes";
import { deleteOneProductorById } from "../services/productors";
// Helper
import deleteOneThing from "../helpers/delete";
// Routing
import { useNavigate, useParams } from "react-router-dom";

const Modal1 = ({
  closeModal,
  modalIsOpen,
  idCarrouselItemToManage,
  idProductToManage,
  idEventToManage,
  idRecipeToManage,
  idProductorToManage,
}) => {
  // States
  const [message, setMessage] = useState(""); //states for messages modals
  // Getting connexion Token
  const token = localStorage.getItem("token_access_le_bon_sens");
  // Getting param
  const param = useParams();
  //UseNavigate
  const navigate = useNavigate();

  /**
   * Function managing params of deleteOneThing() in order to the value of param.operation
   */
  const runDeleteFunctions = () => {
    switch (param.operation) {
      case "manageProduct":
        deleteOneThing(
          idProductToManage,
          deleteOneProduct,
          token,
          navigate,
          setMessage
        );
        break;
      case "manageCarrouselProductor":
        deleteOneThing(
          idCarrouselItemToManage,
          deleteOneItemCarrouselById,
          token,
          navigate,
          setMessage
        );
        break;
      case "manageEvents":
        deleteOneThing(
          idEventToManage,
          deleteOneEventById,
          token,
          navigate,
          setMessage
        );
        break;
      case "manageRecipes":
        deleteOneThing(
          idRecipeToManage,
          deleteOneRecipeById,
          token,
          navigate,
          setMessage
        );
        break;
      case "manageProductors":
        deleteOneThing(
          idProductorToManage,
          deleteOneProductorById,
          localStorage.getItem("token_access_le_bon_sens"),
          navigate,
          setMessage
        );
        break;
    }
  };

  /* -----Modal -----*/
  Modal.setAppElement("#root");

  // Style Modal
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
    <div className="modal">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* Manage message in the Modal */}

        {!message && param.operation === "manageProduct" && (
          <p>Etes vous sûr de vouloir supprimer ce produit?</p>
        )}
        {!message && param.operation === "manageCarrouselProductor" && (
          <p>Etes vous sûr de vouloir supprimer cette image?</p>
        )}
        {!message && param.operation === "manageEvents" && (
          <p>Etes vous sûr de vouloir supprimer cet événement?</p>
        )}
        {!message && param.operation === "manageRecipes" && (
          <p>Etes vous sûr de vouloir supprimer cette recette?</p>
        )}
        {!message && param.operation === "manageProductors" && (
          <p>Etes vous sûr de vouloir supprimer ce producteur?</p>
        )}
        {!message && (
          <div className="container-buttons-modal">
            <button
              type="button"
              onClick={() => {
                runDeleteFunctions();
              }}
            >
              oui
            </button>
            <button type="button" onClick={() => closeModal()}>
              non
            </button>
          </div>
        )}
        {message && <p>{message}</p>}
      </Modal>
    </div>
  );
};

export default Modal1;
