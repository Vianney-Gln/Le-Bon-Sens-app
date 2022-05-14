import React from "react";
//Modal
import Modal from "react-modal";

const Modal1 = ({ closeModal, modalIsOpen, message }) => {
  /* -----Modal -----*/
  Modal.setAppElement("#root");

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
  return (
    <div className="modal">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!message && <p>Etes vous sûr de vouloir supprimer ce produit?</p>}
        {!message && (
          <div className="container-buttons-modal">
            <button type="button" onClick={() => closeModal()}>
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
