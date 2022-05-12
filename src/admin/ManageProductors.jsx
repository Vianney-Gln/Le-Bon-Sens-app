import React, { useState } from "react";
//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faFile } from "@fortawesome/free-solid-svg-icons";

const ManageProductors = () => {
  //States
  const [listProductorsToManage, setListProductorsToManage] = useState([]);
  return (
    <div className="container-manageProductor">
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
                <tr key={element.id}>
                  <td align="center">{listProductor.name}</td>
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
  );
};

export default ManageProductors;
