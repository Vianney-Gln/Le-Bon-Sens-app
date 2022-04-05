import React, { useState } from "react";

const FormEvents = () => {
  /* ------ states variables ------ */
  const [dataEvents, setDataEvents] = useState({});
  /**
   * function getting all infos from the form and turn them into an object in the state dataEvents
   * @param {string | number} value
   * @param {string} key
   */
  const getDataEvents = (value, key) => {
    const newData = dataEvents;
    newData[key] = value;
    setDataEvents(newData);
  };

  const handleFormEvents = (e) => {
    e.preventDefault();
    console.log(dataEvents);
  };
  return (
    <div className="container-formEvents">
      <h3>Ajouter des produits en stock</h3>
      <form onSubmit={handleFormEvents}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="nom de l'évènement"
            onChange={(e) => getDataEvents(e.target.value, "name")}
          ></input>
        </label>
        <label htmlFor="description">
          <textarea
            name="description"
            placeholder="nom de l'évènement"
            onChange={(e) => getDataEvents(e.target.value, "description")}
          ></textarea>
        </label>
        <label htmlFor="date">
          <input
            type="datetime-local"
            name="date"
            onChange={(e) => getDataEvents(e.target.value, "date")}
          ></input>
        </label>
        <label htmlFor="urlImage">
          <input
            type="text"
            name="urlImage"
            placeholder="url de l'image"
            onChange={(e) => getDataEvents(e.target.value, "urlImage")}
          ></input>
        </label>
        <button type="submit">valider</button>
      </form>
    </div>
  );
};

export default FormEvents;
