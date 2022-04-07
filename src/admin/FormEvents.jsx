import React, { useState, useEffect } from "react";
//service
import { createOneEvent, getOneEventById } from "../services/events";
//routing
import { useNavigate } from "react-router-dom";

const FormEvents = ({ operation, idEventToManage }) => {
  /* ------ states variables ------ */
  const [dataEvents, setDataEvents] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(false);

  /* ------ useNavigate ------ */
  const navigate = useNavigate();

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
  //function getting one event on component mounting IF we're in update mode
  useEffect(() => {
    if (operation === "updateEvent") {
      getOneEventById(idEventToManage)
        .then((result) => {
          setDataEvents(result);
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleFormEventUpdate = (e) => {
    e.preventDefault();
    console.log("update");
  };

  /**
   * function running the createOneEvent function
   * if success setup a successMessage and redirect
   * if fail, setup a failure Message
   * @param {*} e
   */
  const handleFormEventsPost = (e) => {
    e.preventDefault();
    createOneEvent(dataEvents)
      .then(() => {
        setSuccessMessage(
          "l'évent a bien été créé, redirection à l'accueil admin..."
        );
        setError(false);
        setTimeout(() => {
          navigate("/admin");
        }, 3000);
      })
      .catch(() => {
        setError(true);
        setSuccessMessage(
          "il y a eu une erreur lors de la creation de l'évent, veuillez vérifier vos champs svp"
        );
      });
  };
  return (
    <div className="container-formEvents">
      {operation === "updateEvent" && <h3>Modifier un évènement</h3>}
      {operation === "createEvent" && <h3>Créer un évènement</h3>}

      <form
        onSubmit={
          operation === "createEvent"
            ? handleFormEventsPost
            : handleFormEventUpdate
        }
      >
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
            placeholder="description de l'évènement"
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
        {successMessage && (
          <p className={!error ? "success" : "fail"}>{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default FormEvents;
