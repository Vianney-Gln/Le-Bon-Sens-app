import React, { useState, useEffect } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faFile, faImage } from "@fortawesome/free-solid-svg-icons";
// Component
import Modal1 from "../components/Modal";
// Services
import { getNamesProductors } from "../services/productors";
// Style
import "../styles/manageProductors.scss";

const ManageProductors = ({ idProductorToManage, setIdProductorToManage }) => {
  // States
  const [listProductorsToManage, setListProductorsToManage] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal

  // UseNavigate
  const navigate = useNavigate();

  /* ------ Functions running Modal ------ */

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Function getting names and id from productors on component mounting
  useEffect(() => {
    getNamesProductors().then((productors) => {
      setListProductorsToManage(productors);
    });
  }, []);
  return (
    <>
      <Modal1
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        idProductorToManage={idProductorToManage}
      />
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
                        <i
                          onClick={() => {
                            setIdProductorToManage(listProductor.id);
                            navigate("/admin/manageCarrouselProductor");
                          }}
                          title="gérer carrousel"
                        >
                          <FontAwesomeIcon icon={faImage} />
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
