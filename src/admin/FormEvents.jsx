import React from "react";

const FormEvents = () => {
  return (
    <div className="container-formEvents">
      <h3>Ajouter des produits en stock</h3>
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="nom de l'évènement"
          ></input>
        </label>
        <label htmlFor="description">
          <textarea
            name="description"
            placeholder="nom de l'évènement"
          ></textarea>
        </label>
        <label htmlFor="date">
          <input type="datetime-local" name="date"></input>
        </label>
        <label htmlFor="urlImage">
          <input
            type="text"
            name="urlImage"
            placeholder="url de l'image"
          ></input>
        </label>
        <button type="submit">valider</button>
      </form>
    </div>
  );
};

export default FormEvents;
