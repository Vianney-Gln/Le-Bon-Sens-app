import React, { useEffect, useState } from "react";
//service
import getInfosShop from "../services/shop";

const FormShop = () => {
  /* -------- states ------- */
  const [dataShop, setDataShop] = useState({});
  const [dataShopToUpdate, setDataShopToUpdate] = useState({});

  /**
   * function submitting the form
   * @param {*} e
   */
  const handleFormShop = (e) => {
    e.preventDefault();
    console.log(dataShopToUpdate);
  };

  /**
   * function getting all infos from the form and turn them into an object in the state dataShop
   * @param {string | number} value
   * @param {string} key
   */
  const getDataShop = (value, key) => {
    const newData = dataShopToUpdate;
    newData[key] = value;
    setDataShopToUpdate(newData);
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
            onChange={(e) => getDataShop(e.target.value, "name")}
          ></input>
        </label>
        <label htmlFor="description1">
          <span>description1:</span>
          <input
            type="text"
            name="description1"
            placeholder="description1"
            defaultValue={dataShop ? dataShop.description1 : ""}
            onChange={(e) => getDataShop(e.target.value, "description1")}
          ></input>
        </label>
        <label htmlFor="description2">
          <span>description2:</span>
          <input
            type="text"
            name="description2"
            placeholder="description2"
            defaultValue={dataShop ? dataShop.description2 : ""}
            onChange={(e) => getDataShop(e.target.value, "description2")}
          ></input>
        </label>
        <label htmlFor="urlPhoto1">
          <span>urlPhoto1:</span>
          <input
            type="text"
            name="urlPhoto1"
            placeholder="urlPhoto1"
            defaultValue={dataShop ? dataShop.urlPhoto1 : ""}
            onChange={(e) => getDataShop(e.target.value, "urlPhoto1")}
          ></input>
        </label>
        <label htmlFor="urlPhoto2">
          <span>urlPhoto2:</span>
          <input
            type="text"
            name="urlPhoto2"
            placeholder="urlPhoto2"
            defaultValue={dataShop ? dataShop.urlPhoto2 : ""}
            onChange={(e) => getDataShop(e.target.value, "urlPhoto2")}
          ></input>
        </label>
        <label htmlFor="urlPhoto3">
          <span>urlPhoto3:</span>
          <input
            type="text"
            name="urlPhoto3"
            placeholder="urlPhoto3"
            defaultValue={dataShop ? dataShop.urlPhoto3 : ""}
            onChange={(e) => getDataShop(e.target.value, "urlPhoto3")}
          ></input>
        </label>
        <label htmlFor="adress">
          <span>adresse:</span>
          <input
            type="text"
            name="adress"
            placeholder="nouvelle adresse"
            defaultValue={dataShop ? dataShop.address : ""}
            onChange={(e) => getDataShop(e.target.value, "address")}
          ></input>
        </label>
        <label htmlFor="phone">
          <span>téléphone:</span>
          <input
            type="text"
            name="phone"
            placeholder="nouveau numéro de téléphone"
            defaultValue={dataShop ? dataShop.phone : ""}
            onChange={(e) => getDataShop(e.target.value, "phone")}
          ></input>
        </label>
        <label htmlFor="email">
          <span>email:</span>
          <input
            type="email"
            name="email"
            placeholder="nouvelle adresse email"
            defaultValue={dataShop ? dataShop.email : ""}
            onChange={(e) => getDataShop(e.target.value, "email")}
          ></input>
        </label>
        <label htmlFor="schedule">
          <span>horaires:</span>
          <input
            type="text"
            name="schedule"
            placeholder="nouveaux horaires"
            defaultValue={dataShop ? dataShop.schedule : ""}
            onChange={(e) => getDataShop(e.target.value, "schedule")}
          ></input>
        </label>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default FormShop;
