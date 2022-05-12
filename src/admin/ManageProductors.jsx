import React, { useState, useEffect } from "react";
//Routing
import { useNavigate } from "react-router-dom";
//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faFile } from "@fortawesome/free-solid-svg-icons";
//Modal
import Modal from "react-modal/lib/components/Modal";
//Helper
import deleteOneThing from "../helpers/delete";
//Service
import {
  getNamesProductors,
  deleteOneProductorById,
} from "../services/productors";
//style
import "../styles/manageProductors.scss";

const ManageProductors = ({ idProductorToManage, setIdProductorToManage }) => {
  //States
  const [listProductorsToManage, setListProductorsToManage] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal
  const [message, setMessage] = useState("");

  //useNavigate
  const navigate = useNavigate();

  /* ------ Modal ------ */
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

  //Function getting names and id from productors on component mounting
  useEffect(() => {
    getNamesProductors().then((productors) => {
      setListProductorsToManage(productors);
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
        {!message ? (
          <>
            <p>Etes vous sûr de vouloir supprimer ce producteur?</p>

            <div className="container-buttons-modal">
              <button
                type="button"
                onClick={() =>
                  deleteOneThing(
                    idProductorToManage,
                    deleteOneProductorById,
                    localStorage.getItem("token_access_le_bon_sens"),
                    navigate,
                    setMessage
                  )
                }
              >
                oui
              </button>
              <button type="button" onClick={() => closeModal()}>
                non
              </button>
            </div>
          </>
        ) : (
          <p>{message}</p>
        )}
      </Modal>
      <div className="container-manageProductors">
        <h3>ManageProductors</h3>
        <table>
          <caption>Gestion des producteurs</caption>
          <thead>
            <tr align="center">
              <th>Nom du producteur</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listProductorsToManage.length < 1 && (
              <tr align="center">
                <td></td>
                <td></td>
              </tr>
            )}
            {listProductorsToManage &&
              listProductorsToManage.map((listProductor) => {
                return (
                  <tr key={listProductor.id}>
                    <td align="center">{listProductor.name}</td>
                    <td align="center" className="action">
                      <span>
                        <i
                          onClick={() => {
                            openModal();
                            setIdProductorToManage(listProductor.id);
                          }}
                          title="supprimer"
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </i>
                        <i
                          onClick={() => {
                            setIdProductorToManage(listProductor.id);
                            navigate("/admin/updateProductor");
                          }}
                          title="modifier"
                        >
                          <FontAwesomeIcon icon={faFile} />
                        </i>
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProductors;
