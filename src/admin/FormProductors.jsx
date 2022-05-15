import React, { useState, useEffect } from "react";
//Helper
import getDataInput, { handleForm } from "../helpers/form"; //function getting input items
//Service
import {
  addProductor,
  getInfosProductors,
  updateProductorById,
} from "../services/productors";
//Routing
import { useNavigate } from "react-router-dom";

const FormProductors = ({ operation, idProductorToManage }) => {
  //States
  const [dataProductor, setDataProductor] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  //Navigate
  const navigate = useNavigate();

  //function getting infos from one productor by id on component mounting (only if operation === updateProductor)

  useEffect(() => {
    if (operation === "updateProductor") {
      getInfosProductors(idProductorToManage)
        .then((infosProductor) => {
          console.log(infosProductor);
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
      {operation === "updateProductor" && <h3>Modifier un producteur</h3>}
      {operation === "addProductor" && <h3>Créer un producteur</h3>}

      <form
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
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="nom du producteur"
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
          <textarea
            name="description1"
            placeholder="description du producteur"
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
          <input
            type="text"
            name="urlGoogleMap"
            placeholder="entrez l'url google map"
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
          <input
            type="text"
            name="urlWebsite"
            placeholder="entrez l'url du site web du producteur"
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
          <input
            type="text"
            name="urlImage1"
            placeholder="entrez l'url de votre image 1"
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
          <input
            type="text"
            name="urlImage2"
            placeholder="entrez l'url de votre image 2"
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
          <input
            type="text"
            name="urlFacebook"
            placeholder="entrez l'url du Facebook"
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
          <input
            type="text"
            name="urlTwitter"
            placeholder="entrez l'url du twitter"
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
        {operation === "updateProductor" && (
          <label htmlFor="visibility">
            <select
              name="visibility"
              placeholder="gérer la visibilité"
              onChange={(e) => {
                getDataInput(
                  dataProductor,
                  setDataProductor,
                  e.target.value,
                  "isPublic"
                );
              }}
            >
              <option>Choix visibilité</option>
              <option value={0}>Admin </option>
              <option value={1}>Publique </option>
            </select>
          </label>
        )}
        <button type="submit">
          {operation === "addProductor" ? "Valider" : "modifier"}
        </button>
        {message && <p className={!error ? "success" : "fail"}>{message}</p>}
      </form>
    </div>
  );
};

export default FormProductors;
