/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
// style
import "../styles/events.scss";

// utility
import { isObjEmpty } from "../utility/utility_functions";

// service
import getInfosEvents from "../services/events";

const Events = () => {
  // doc title
  document.title = "Le Bon Sens - Evènements";

  // variables statement
  const [currentEvent, setCurrentEvent] = useState({}); // current event
  const [events, setEvents] = useState([]); // all other events

  // getting all infos about events on component mounting
  useEffect(() => {
    getInfosEvents().then((evts) => {
      evts.forEach((evt) => {
        if (evt.isCurrent === 1) {
          setCurrentEvent(evt);
        } else {
          setEvents((oldEvents) => [evt, ...oldEvents]); // "push" events
        }
      });
    });
  }, []);

  return (
    <div className="container-events">
      <div className="container-event-comming">
        {!isObjEmpty(currentEvent) ? (
          /* If there is a current event, display it */
          <>
            <h1>Evènement à venir</h1>
            <h3>{currentEvent.name}</h3>
            <img src={currentEvent.urlImage} alt={currentEvent.name} />
            <div className="description-event">
              <p>{currentEvent.description}</p>
            </div>
          </>
        ) : events.length ? (
          /* If not, display the last past event */
          <>
            <h1>Dernier évènement</h1>
            <h3>{events[events.length - 1].name}</h3>
            <img
              src={events[events.length - 1].urlImage}
              alt={events[events.length - 1].name}
            />
            <div className="description-event">
              <p>{events[events.length - 1].description}</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="container-past-event">
        <h1>Evènements passés</h1>
        {events &&
          events.map((eve, index) => {
            /* logic displaying all past events expept the most recent who's displaying to top */
            if (index < events.length - 1) {
              return (
                <div key={eve.id} className="description-event">
                  <h3>{eve.name}</h3>
                  <p>{eve.description}</p>
                </div>
              );
            }
            return true;
          })}
      </div>
    </div>
  );
};

export default Events;
