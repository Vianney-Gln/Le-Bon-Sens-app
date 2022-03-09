/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
// style
import "../styles/events.scss";

// utility
import { isObjEmpty } from "../utility/utility_functions";

// service
import getInfosEvents from "../services/events";

const Events = ({ setInsert }) => {
  /* ------ disable insert event ------*/
  setInsert(false);

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
        }
        setEvents((oldEvents) => [...oldEvents, evt]); // "push" events
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
            <h3>
              {currentEvent.name}
              <span>{currentEvent.sortedDate}</span>
            </h3>
            <img src={currentEvent.urlImage} alt={currentEvent.name} />
            <div className="description-event">
              <p>{currentEvent.description}</p>
            </div>
          </>
        ) : events.length ? (
          /* If not, display the last past event (first of the list) */
          <>
            <h1>Dernier évènement</h1>
            <h3>
              {events[0].name}
              <span> du {events[0].sortedDate}</span>
            </h3>
            <img src={events[0].urlImage} alt={events[0].name} />
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
          events.map((eve) => {
            if (
              eve.isCurrent === 0 &&
              eve.sortedDate !== events[0].sortedDate
            ) {
              return (
                <div key={eve.sortedDate} className="description-event">
                  <h3>
                    {eve.name}
                    <span> le {eve.sortedDate}</span>
                  </h3>
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
