import React, { useEffect, useState } from "react";
// Services
import getInfosShop, { updateInfosShop } from "../services/shop";
// Helper
import getDataInput, { handleForm } from "../helpers/form";
// Routing
import { useNavigate, useParams } from "react-router-dom";
// Style
import "../styles/formShop.scss";

const FormShop = () => {
  /* -------- States ------- */
  const [dataShop, setDataShop] = useState({});
  const [dataShopToUpdate, setDataShopToUpdate] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  /* ----- UseNavigate ------*/
  const navigate = useNavigate();

  /* ----- UseParams ----- */
  const { operation } = useParams();

  /* -------- Getting data shop on component mounting ------- */
  useEffect(() => {
    getInfosShop()
      .then((result) => setDataShop(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-update-infos-shop">
      <h3>Modification des infos du magasin</h3>
      <form
        className="form-infosShop"
        onSubmit={(e) => {
          handleForm(
            e,
            updateInfosShop,
            setMessage,
            setError,
            dataShopToUpdate,
            navigate,
            operation
          );
        }}
      >
        <label htmlFor="name">
          <span>Nom du magasin:</span>
          <input
            type="text"
            name="name"
            placeholder="nom du magasin"
            defaultValue={dataShop ? dataShop.name : ""}
            onChange={(e) =>
              getDataInput(
                dataShopToUpdate,
                setDataShopToUpdate,
                e.target.value,
                "name"
              )
            }
          ></input>
        </label>
        <label htmlFor="description1">
          <span>Description:</span>
          <textarea
            type="text"
            name="description1"
            placeholder="description1"
            defaultValue={dataShop ? dataShop.description1 : ""}
            onChange={(e) =>
              getDataInput(
                dataShopToUpdate,
                setDataShopToUpdate,
                e.target.value,
                "description1"
              )
            }
          ></textarea>
        </label>
        <label htmlFor="urlPhoto1">
          <span>Lien image1:</span>
          <input
            type="text"
            name="urlPhoto1"
            placeholder="urlPhoto1"
            defaultValue={dataShop ? dataShop.urlPhoto1 : ""}
            onChange={(e) =>
              getDataInput(
                dataShopToUpdate,
                setDataShopToUpdate,
                e.target.value,
                "urlPhoto1"
              )
            }
          ></input>
        </label>
        <label htmlFor="urlPhoto2">
          <span>Lien image2:</span>
          <input
            type="text"
            name="urlPhoto2"
            placeholder="urlPhoto2"
            defaultValue={dataShop ? dataShop.urlPhoto2 : ""}
            onChange={(e) =>
              getDataInput(
                dataShopToUpdate,
                setDataShopToUpdate,
                e.target.value,
                "urlPhoto2"
              )
            }
          ></input>
        </label>
        <label htmlFor="urlPhoto3">
          <span>Lien image3:</span>
          <input
            type="text"
            name="urlPhoto3"
            placeholder="urlPhoto3"
            defaultValue={dataShop ? dataShop.urlPhoto3 : ""}
            onChange={(e) =>
              getDataInput(
                dataShopToUpdate,
                setDataShopToUpdate,
                e.target.value,
                "urlPhoto3"
              )
            }
          ></input>
        </label>
        <label htmlFor="adress">
          <span>Adresse:</span>
          <input
            type="text"
            name="adress"
            placeholder="nouvelle adresse"
            defaultValue={dataShop ? dataShop.address : ""}
            onChange={(e) =>
              getDataInput(
                dataShopToUpdate,
                setDataShopToUpdate,
                e.target.value,
                "address"
              )
            }
          ></input>
        </label>
        <label htmlFor="phone">
          <span>Téléphone:</span>
          <input
            type="text"
            name="phone"
            placeholder="nouveau numéro de téléphone"
            defaultValue={dataShop ? dataShop.phone : ""}
            onChange={(e) =>
              getDataInput(
                dataShopToUpdate,
                setDataShopToUpdate,
                e.target.value,
                "phone"
              )
            }
          ></input>
        </label>
        <label htmlFor="email">
          <span>Adresse email:</span>
          <input
            type="email"
            name="email"
            placeholder="nouvelle adresse email"
            defaultValue={dataShop ? dataShop.email : ""}
            onChange={(e) =>
              getDataInput(
                dataShopToUpdate,
                setDataShopToUpdate,
                e.target.value,
                "email"
              )
            }
          ></input>
        </label>
        <label htmlFor="schedule">
          <span>Horaires:</span>
          <input
            type="text"
            name="schedule"
            placeholder="nouveaux horaires"
            defaultValue={dataShop ? dataShop.schedule : ""}
            onChange={(e) =>
              getDataInput(
                dataShopToUpdate,
                setDataShopToUpdate,
                e.target.value,
                "schedule"
              )
            }
          ></input>
        </label>
        <button type="submit">Modifier</button>
        {message && <p className={!error ? "success" : "fail"}>{message}</p>}
      </form>
    </div>
  );
};

export default FormShop;
