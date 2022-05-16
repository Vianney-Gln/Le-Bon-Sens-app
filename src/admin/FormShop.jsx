import React, { useEffect, useState } from "react";
//Services
import getInfosShop, { updateInfosShop } from "../services/shop";
//Helper
import getDataInput from "../helpers/form";

const FormShop = () => {
  /* -------- states ------- */
  const [dataShop, setDataShop] = useState({});
  const [dataShopToUpdate, setDataShopToUpdate] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(false);

  /**
   * function submitting the form
   * @param {*} e
   */
  const handleFormShop = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token_access_le_bon_sens");
    updateInfosShop(dataShopToUpdate, token)
      .then(() => {
        setSuccessMessage("données mises à jour correctement");
        setError(false);
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setSuccessMessage(
          "Il y a eu une erreur lors de la mise à jour des données"
        );
        setError(true);
      });
  };

  /* -------- getting data shop on component mounting ------- */
  useEffect(() => {
    getInfosShop()
      .then((result) => setDataShop(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-update-infos-shop">
      <h3>Modification des infos du magasin</h3>
      <form onSubmit={handleFormShop}>
        <label htmlFor="name">
          <span>nom du magasin:</span>
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
          <span>description1:</span>
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
        <label htmlFor="charte">
          <span>charte:</span>
          <textarea
            type="text"
            name="charte"
            placeholder="charte"
            defaultValue={dataShop ? dataShop.charte : ""}
            onChange={(e) =>
              getDataInput(
                dataShopToUpdate,
                setDataShopToUpdate,
                e.target.value,
                "charte"
              )
            }
          ></textarea>
        </label>
        <label htmlFor="urlPhoto1">
          <span>urlPhoto1:</span>
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
          <span>urlPhoto2:</span>
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
          <span>urlPhoto3:</span>
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
          <span>adresse:</span>
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
          <span>téléphone:</span>
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
          <span>email:</span>
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
          <span>horaires:</span>
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
        {successMessage && (
          <p className={!error ? "success" : "fail"}>{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default FormShop;
