import React, { useEffect, useState } from "react";
//service
import getInfosShop from "../services/shop";

const FormShop = () => {
  /* -------- states ------- */
  const [dataShop, setDataShop] = useState({});

  /**
   * function submitting the form
   * @param {*} e
   */
  const handleFormShop = (e) => {
    e.preventDefault();
    console.log("coucou");
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
          <input
            type="text"
            name="name"
            placeholder="nom du magasin"
            defaultValue={dataShop ? dataShop.name : ""}
          ></input>
        </label>
        <label htmlFor="description1">
          <input
            type="text"
            name="description1"
            placeholder="description1"
            defaultValue={dataShop ? dataShop.description1 : ""}
          ></input>
        </label>
        <label htmlFor="description2">
          <input
            type="text"
            name="description2"
            placeholder="description2"
            defaultValue={dataShop ? dataShop.description2 : ""}
          ></input>
        </label>
        <label htmlFor="urlPhoto1">
          <input
            type="text"
            name="urlPhoto1"
            placeholder="urlPhoto1"
            defaultValue={dataShop ? dataShop.urlPhoto1 : ""}
          ></input>
        </label>
        <label htmlFor="urlPhoto2">
          <input
            type="text"
            name="urlPhoto2"
            placeholder="urlPhoto2"
            defaultValue={dataShop ? dataShop.urlPhoto2 : ""}
          ></input>
        </label>
        <label htmlFor="urlPhoto3">
          <input
            type="text"
            name="urlPhoto3"
            placeholder="urlPhoto3"
            defaultValue={dataShop ? dataShop.urlPhoto3 : ""}
          ></input>
        </label>
        <label htmlFor="adress">
          <input
            type="text"
            name="adress"
            placeholder="nouvelle adresse"
            defaultValue={dataShop ? dataShop.address : ""}
          ></input>
        </label>
        <label htmlFor="phone">
          <input
            type="text"
            name="phone"
            placeholder="nouveau numéro de téléphone"
            defaultValue={dataShop ? dataShop.phone : ""}
          ></input>
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="nouvelle adresse email"
            defaultValue={dataShop ? dataShop.email : ""}
          ></input>
        </label>
        <label htmlFor="schedule">
          <input
            type="text"
            name="schedule"
            placeholder="nouveaux horaires"
            defaultValue={dataShop ? dataShop.schedule : ""}
          ></input>
        </label>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default FormShop;
