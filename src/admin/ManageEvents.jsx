import React, { useState, useEffect } from "react";
//service
import { getAllInfosEvents } from "../services/events";

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
        <thead>
          <tr>
            <th>Historique des évènements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nom de l'event</td>
            <td>Date de l'event</td>
          </tr>
          {listEventsToManage &&
            listEventsToManage.map((element) => {
              return (
                <tr key={element.id}>
                  <td>{element.name}</td>
                  <td>{element.sortedDate}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEvents;
