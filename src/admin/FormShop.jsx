import React from "react";

const FormShop = () => {
  const handleFormShop = (e) => {
    e.preventDefault();
    console.log("coucou");
  };
  return (
    <div className="container-update-infos-shop">
      <h3>Modification des infos du magasin</h3>
      <form onSubmit={handleFormShop}>
        <label htmlFor="name">
          <input type="text" name="name" placeholder="nom du magasin"></input>
        </label>
        <label htmlFor="description1">
          <input
            type="text"
            name="description1"
            placeholder="description1"
          ></input>
        </label>
        <label htmlFor="description2">
          <input
            type="text"
            name="description2"
            placeholder="description2"
          ></input>
        </label>
        <label htmlFor="urlPhoto1">
          <input type="text" name="urlPhoto1" placeholder="urlPhoto1"></input>
        </label>
        <label htmlFor="urlPhoto2">
          <input type="text" name="urlPhoto2" placeholder="urlPhoto2"></input>
        </label>
        <label htmlFor="urlPhoto3">
          <input type="text" name="urlPhoto3" placeholder="urlPhoto3"></input>
        </label>
        <label htmlFor="adress">
          <input
            type="text"
            name="adress"
            placeholder="nouvelle adresse"
          ></input>
        </label>
        <label htmlFor="phone">
          <input
            type="text"
            name="phone"
            placeholder="nouveau numéro de téléphone"
          ></input>
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="nouvelle adresse email"
          ></input>
        </label>
        <label htmlFor="schedule">
          <input
            type="text"
            name="schedule"
            placeholder="nouveaux horaires"
          ></input>
        </label>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default FormShop;
