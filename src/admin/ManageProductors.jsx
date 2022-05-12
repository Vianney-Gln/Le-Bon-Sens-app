import React, { useState, useEffect } from "react";
//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faFile } from "@fortawesome/free-solid-svg-icons";
//Service
import { getNamesProductors } from "../services/productors";
//style
import "../styles/manageProductors.scss";

const ManageProductors = (idProductorToManage, setIdProductorToManage) => {
  //States
  const [listProductorsToManage, setListProductorsToManage] = useState([]);

  //Function getting names and id from productors on component mounting
  useEffect(() => {
    getNamesProductors().then((productors) => {
      setListProductorsToManage(productors);
    });
  }, []);
  return (
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
                          setIdEventToManage(listProductor.id);
                        }}
                        title="supprimer"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </i>
                      <i
                        onClick={() => {
                          setIdEventToManage(listProductor.id);
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
