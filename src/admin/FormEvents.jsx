import React, { useState, useEffect } from "react";
// Services
import {
  createOneEvent,
  getOneEventById,
  updateOneEventById,
} from "../services/events";
// Helpers
import getDataInput, { handleForm } from "../helpers/form";
// Routing
import { useNavigate } from "react-router-dom";

const FormEvents = ({ operation, idEventToManage }) => {
  /* ------ States variables ------ */
  const [dataEvents, setDataEvents] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  /* ------ UseNavigate ------ */
  const navigate = useNavigate();

  // Function getting one event on component mounting IF we're in update mode
  useEffect(() => {
    if (operation === "updateEvent") {
      getOneEventById(idEventToManage)
        .then((result) => {
          setDataEvents(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="container-formEvents">
      {operation === "updateEvent" && <h3>Modifier un évènement</h3>}
      {operation === "createEvent" && <h3>Créer un évènement</h3>}

      <form
        onSubmit={(e) => {
          if (operation === "createEvent") {
            handleForm(
              e,
              createOneEvent,
              setMessage,
              setError,
              dataEvents,
              navigate,
              operation
            );
          } else if (operation === "updateEvent") {
            handleForm(
              e,
              updateOneEventById,
              setMessage,
              setError,
              dataEvents,
              navigate,
              operation,
              idEventToManage
            );
          }
        }}
      >
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="nom de l'évènement"
            onChange={(e) =>
              getDataInput(dataEvents, setDataEvents, e.target.value, "name")
            }
            defaultValue={operation === "updateEvent" ? dataEvents.name : ""}
          ></input>
        </label>
        <label htmlFor="description">
          <textarea
            name="description"
            placeholder="description de l'évènement"
            onChange={(e) =>
              getDataInput(
                dataEvents,
                setDataEvents,
                e.target.value,
                "description"
              )
            }
            defaultValue={
              operation === "updateEvent" ? dataEvents.description : ""
            }
          ></textarea>
        </label>
        <label htmlFor="date">
          <input
            type="date"
            name="date"
            onChange={(e) =>
              getDataInput(dataEvents, setDataEvents, e.target.value, "date")
            }
            defaultValue={operation === "updateEvent" ? dataEvents.date : ""}
          ></input>
        </label>
        <label htmlFor="hour">
          <input
            type="time"
            name="hour"
            onChange={(e) =>
              getDataInput(dataEvents, setDataEvents, e.target.value, "hour")
            }
            defaultValue={operation === "updateEvent" ? dataEvents.hour : ""}
          ></input>
        </label>
        <label htmlFor="urlImage">
          <input
            type="text"
            name="urlImage"
            placeholder="url de l'image"
            onChange={(e) =>
              getDataInput(
                dataEvents,
                setDataEvents,
                e.target.value,
                "urlImage"
              )
            }
            defaultValue={
              operation === "updateEvent" ? dataEvents.urlImage : ""
            }
          ></input>
        </label>
        <button type="submit">valider</button>
        {message && <p className={!error ? "success" : "fail"}>{message}</p>}
      </form>
    </div>
  );
};

export default FormEvents;
