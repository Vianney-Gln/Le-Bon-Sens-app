import React, { useState, useEffect } from "react";
//service
import { getAllInfosEvents, deleteOneEventById } from "../services/events";
//style
import "../styles/manageEvents.scss";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faFile } from "@fortawesome/free-solid-svg-icons";
//Modal
import Modal from "react-modal/lib/components/Modal";
//Routing
import { useNavigate } from "react-router-dom";
const ManageEvents = () => {
  /* ------ states variables ------ */
  const [listEventsToManage, setListEventsToManage] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal
  const [successMessage, setSuccessMessage] = useState("");
  const [idEventToManage, setIdEventToManage] = useState("");

  /* ------- Navigate ------- */
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

  //function getting all events on component mounting
  useEffect(() => {
    getAllInfosEvents().then((result) => {
      setListEventsToManage(result);
      console.log(result);
    });
  }, []);

  const runDeleteOneEvent = () => {
    deleteOneEventById(idEventToManage)
      .then(() => {
        setSuccessMessage(
          "suppression de l'event en cours, vous serez redirigé à l'accueil admin ...."
        );
        setTimeout(() => {
          navigate("/admin");
        }, 3000);
      })
      .catch(() => {
        setSuccessMessage(
          "il y a eu une erreur lors de la suppression de l'évent, vous serez redirigé à l'accueil admin...."
        );
        setTimeout(() => {
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
        {!successMessage ? (
          <>
            <p>Etes vous sûr de vouloir supprimer ce produit?</p>

            <div className="container-buttons-modal">
              <button type="button" onClick={() => runDeleteOneEvent()}>
                oui
              </button>
              <button type="button" onClick={() => closeModal()}>
                non
              </button>
            </div>
          </>
        ) : (
          <p>{successMessage}</p>
        )}
      </Modal>
      <div className="container-manageEvents">
        <h3>ManageEvents</h3>
        <table>
          <caption>Historique des évènements</caption>
          <thead>
            <tr align="center">
              <th>Nom de l'event</th>
              <th>Date de l'event</th>
              <th>Status évènement</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listEventsToManage &&
              listEventsToManage.map((element) => {
                return (
                  <tr key={element.id}>
                    <td align="center">{element.name}</td>
                    <td align="center">{element.sortedDate}</td>
                    <td align="center">
                      {element.isCurrent ? "en cours" : "passé"}
                    </td>
                    <td align="center" className="action">
                      <span>
                        <i
                          onClick={() => {
                            openModal();
                            setIdEventToManage(element.id);
                          }}
                          title="supprimer"
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </i>
                        <i title="modifier">
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

export default ManageEvents;
