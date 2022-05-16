import React, { useState, useEffect } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Component
import Modal1 from "../components/Modal";
// Style
import "../styles/formCarrouselProductors.scss";
// Helper
import getDataInput, { handleForm } from "../helpers/form";
// Services
import {
  addOneCarrouselItem,
  getInfosProductors,
} from "../services/productors";

const FormCarrouselProductors = ({
  idProductorToManage,
  operation,
  setIdCarrouselItemToManage,
  idCarrouselItemToManage,
}) => {
  // States
  const [dataCarrousel, setDataCarrousel] = useState({
    id_productors: idProductorToManage,
  });

  const [error, setError] = useState(false); // state managing color of message (true = red / false = green, depend of a css class)
  const [carrousel, setCarrousel] = useState([]); // state containing data carrousel
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal
  const [message, setMessage] = useState("");

  // Functions running Modal
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  // UseNavigate
  const navigate = useNavigate();

  // Function getting carrousel infos from one productor on component mounting (only if operation === manageCarrouselProductor)
  // If the user refresh the page, redirect to /admin to escape errors

  useEffect(() => {
    if (operation === "manageCarrouselProductor") {
      getInfosProductors(idProductorToManage)
        .then((result) => {
          if (result.carrousel) {
            setCarrousel(result.carrousel);
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/admin"); //redirect in case of refresh
        });
    }
  }, []);

  return (
    <div className="container-formCarrouselProductor">
      <Modal1
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        idCarrouselItemToManage={idCarrouselItemToManage}
      />
      <h3>Ajouter des images au carrousel</h3>
      <form
        onSubmit={(e) =>
          handleForm(
            e,
            addOneCarrouselItem,
            setMessage,
            setError,
            dataCarrousel,
            navigate,
            operation
          )
        }
      >
        <label htmlFor="urlImageCarrousel">
          <input
            type="text"
            name="urlImageCarrousel"
            placeholder="saisissez ici l'url de l'image"
            onChange={(e) => {
              getDataInput(
                dataCarrousel,
                setDataCarrousel,
                e.target.value,
                "urlImageCarrousel"
              );
            }}
          ></input>
        </label>
        <button type="submit">Valider</button>
        {message && <p className={!error ? "success" : "fail"}>{message}</p>}
      </form>
      <h3>Gestion et aperçu des images du carrousel</h3>
      <div className="container-preview-image">
        <ul className="list-image-carrousel-to-manage">
          {carrousel.length ? (
            carrousel.map((image) => {
              return (
                <li className="card-carrousel" key={image.id}>
                  <img src={image.urlImageCarrousel} alt="producteur" />
                  <button
                    onClick={() => {
                      setIdCarrouselItemToManage(image.id);
                      openModal();
                    }}
                    type="button"
                  >
                    Supprimer
                  </button>
                </li>
              );
            })
          ) : (
            <p className="no-image">
              Il n'y a pas encore d'image disponible dans ce carrousel
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FormCarrouselProductors;
