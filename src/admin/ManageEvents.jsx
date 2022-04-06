import React, { useState, useEffect } from "react";
//service
import { getAllInfosEvents } from "../services/events";
//style
import "../styles/manageEvents.scss";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faFile } from "@fortawesome/free-solid-svg-icons";
const ManageEvents = () => {
  /* ------ states variables ------ */
  const [listEventsToManage, setListEventsToManage] = useState([]);

  //function getting all events on component mounting
  useEffect(() => {
    getAllInfosEvents().then((result) => {
      setListEventsToManage(result);
      console.log(result);
    });
  }, []);
  return (
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
                        onClick={() => console.log(element.id + "supprimé")}
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
  );
};

export default ManageEvents;
