import React, { useState, useEffect } from "react";
// Service
import { getAllInfosEvents } from "../services/events";
// Style
import "../styles/manageEvents.scss";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faFile } from "@fortawesome/free-solid-svg-icons";
// Components
import Modal1 from "../components/Modal";
// Routing
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../services/auth";
const ManageEvents = ({ idEventToManage, setIdEventToManage }) => {
  /* ------ States variables ------ */
  const [listEventsToManage, setListEventsToManage] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal

  /* ------- Navigate ------- */
  const navigate = useNavigate();

  /* ------ Functions running Modal ------ */

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Function getting all events on component mounting only connected as admin
  useEffect(() => {
    const token = localStorage.getItem("token_access_le_bon_sens");
    verifyToken(token).then((result) => {
      if (result.data) {
        getAllInfosEvents(token)
          .then((result) => {
            setListEventsToManage(result);
          })
          .catch((err) => console.log(err));
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <Modal1
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        idEventToManage={idEventToManage}
      />

      <div className="container-manageEvents">
        <table>
          <caption>Gestion des événements</caption>
          <thead>
            <tr align="center">
              <th>Nom</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listEventsToManage.length < 1 && (
              <tr align="center">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
            {listEventsToManage &&
              listEventsToManage.map((element) => {
                return (
                  <tr key={element.id}>
                    <td align="center">{element.name}</td>
                    <td align="center">{element.date}</td>
                    <td align="center">{element.hour}</td>
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
                        <i
                          onClick={() => {
                            setIdEventToManage(element.id);
                            navigate("/admin/updateEvent");
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

export default ManageEvents;
