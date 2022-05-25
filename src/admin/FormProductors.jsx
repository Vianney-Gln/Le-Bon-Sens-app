import React, { useState, useEffect } from "react";
// Helper
import getDataInput, { handleForm } from "../helpers/form"; //function getting input items
// Services
import {
  addProductor,
  getInfosProductors,
  updateProductorById,
} from "../services/productors";
// Routing
import { useNavigate } from "react-router-dom";
// Style
import "../styles/formProductor.scss";

const FormProductors = ({ operation, idProductorToManage }) => {
  // States
  const [dataProductor, setDataProductor] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  // Navigate
  const navigate = useNavigate();

  // Function getting infos from one productor by id on component mounting (only if operation === updateProductor)

  useEffect(() => {
    if (operation === "updateProductor") {
      getInfosProductors(idProductorToManage)
        .then((infosProductor) => {
          delete infosProductor.carrousel; //delete carrousel from the result
          setDataProductor(infosProductor);
        })
        .catch((err) => {
          console.log(err);
          setDataProductor({});
        });
    }
  }, []);

  return (
    <div className="container-addProductors">
      <form
        className="formProductors"
        onSubmit={(e) => {
          if (operation === "addProductor") {
            handleForm(
              e,
              addProductor,
              setMessage,
              setError,
              dataProductor,
              navigate,
              operation
            );
          } else if (operation === "updateProductor") {
            handleForm(
              e,
              updateProductorById,
              setMessage,
              setError,
              dataProductor,
              navigate,
              operation,
              idProductorToManage
            );
          }
        }}
      >
        {operation === "updateProductor" && <h3>Modifier un producteur</h3>}
        {operation === "addProductor" && <h3>Créer un producteur</h3>}
        <label htmlFor="name">
          <span>
            Nom du producteur {operation === "addProductor" && "(requis)"}
          </span>
          <input
            type="text"
            name="name"
            placeholder="Veuillez entrer le nom du producteur"
            defaultValue={
              operation === "updateProductor" ? dataProductor.name : ""
            }
            onChange={(e) => {
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "name"
              );
            }}
          />
        </label>
        <label htmlFor="description1">
          <span>
            Description du producteur
            {operation === "addProductor" && " (requis)"}
          </span>
          <textarea
            name="description1"
            placeholder="Veuillez entrer la description du producteur"
            defaultValue={
              operation === "updateProductor" ? dataProductor.description1 : ""
            }
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "description1"
              )
            }
          />
        </label>
        <label htmlFor="urlGoogleMap">
          <span>
            Lien de google map {operation === "addProductor" && " (requis)"}
          </span>
          <input
            type="text"
            name="urlGoogleMap"
            placeholder="Veuillez entrer l'url google map"
            defaultValue={
              operation === "updateProductor" ? dataProductor.urlGoogleMap : ""
            }
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlGoogleMap"
              )
            }
          />
        </label>
        <label htmlFor="urlWebsite">
          <span>
            Lien du site web {operation === "addProductor" && " (requis)"}
          </span>
          <input
            type="text"
            name="urlWebsite"
            placeholder="Veuillez entrer l'url du site web du producteur"
            defaultValue={
              operation === "updateProductor" ? dataProductor.urlWebsite : ""
            }
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlWebsite"
              )
            }
          />
        </label>
        <label htmlFor="urlImage1">
          <span>
            Lien de l'image 1 {operation === "addProductor" && " (requis)"}
          </span>
          <input
            type="text"
            name="urlImage1"
            placeholder="Veuillez entrer l'url de votre image 1"
            defaultValue={
              operation === "updateProductor" ? dataProductor.urlImage1 : ""
            }
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlImage1"
              )
            }
          />
        </label>
        <label htmlFor="urlImage2">
          <span>
            Lien de l'image 2 {operation === "addProductor" && " (requis)"}
          </span>
          <input
            type="text"
            name="urlImage2"
            placeholder="Veuillez entrer l'url de votre image 2"
            defaultValue={
              operation === "updateProductor" ? dataProductor.urlImage2 : ""
            }
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlImage2"
              )
            }
          />
        </label>
        <label htmlFor="urlFacebook">
          <span>Lien du Facebook</span>
          <input
            type="text"
            name="urlFacebook"
            placeholder="veuillez entrer l'url du Facebook"
            defaultValue={
              operation === "updateProductor" ? dataProductor.urlFacebook : ""
            }
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlFacebook"
              )
            }
          />
        </label>
        <label htmlFor="urlTwitter">
          <span>Lien du Twitter</span>
          <input
            type="text"
            name="urlTwitter"
            placeholder="Veuillez entrer l'url du twitter"
            defaultValue={
              operation === "updateProductor" ? dataProductor.urlTwitter : ""
            }
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlTwitter"
              )
            }
          />
        </label>
        {(operation === "updateProductor" && dataProductor.isPublic === 0) ||
        dataProductor.isPublic === 1 ? (
          <label htmlFor="visibility">
            <span>Gestion de la visibilité </span>
            <select
              name="visibility"
              placeholder="gérer la visibilité"
              defaultValue={dataProductor.isPublic}
              onChange={(e) => {
                getDataInput(
                  dataProductor,
                  setDataProductor,
                  e.target.value,
                  "isPublic"
                );
              }}
            >
              <option value={0}>Admin</option>
              <option value={1}>Publique</option>
            </select>
          </label>
        ) : (
          ""
        )}
        <button type="submit">
          {operation === "addProductor" ? "Valider" : "modifier"}
        </button>
        <p className={!error ? "success" : "fail"}>{message && message}</p>
      </form>
    </div>
  );
};

export default FormProductors;
