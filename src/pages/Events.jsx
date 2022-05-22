import React, { useState, useEffect } from "react";
// Style
import "../styles/events.scss";
// Service
import getInfosEvents from "../services/events";

const Events = () => {
  // Doc title
  document.title = "Le Bon Sens - Evènements";
  // Variables statement
  const [currentEvents, setCurrentEvents] = useState([]); // currents events
  const [events, setEvents] = useState([]); // all other events

  // Getting all infos about events on component mounting
  useEffect(() => {
    getInfosEvents().then((evts) => {
      evts.forEach((evt) => {
        if (evt.isCurrent === 1) {
          setCurrentEvents((oldEvents) => [...oldEvents, evt]); // "push" currents events
        } else {
          setEvents((oldEvents) => [...oldEvents, evt]); // "push" past events
        }
      });
    });
  }, []);
  return (
    <div
      className={
        !currentEvents.length && !events.length
          ? "empty-event"
          : "container-events"
      }
    >
      <h1>Evènements</h1>
      {!currentEvents.length && !events.length && (
        <p className="no-events">
          Aucun événement disponible pour l'instant...
        </p>
      )}
      <div className="container-event-comming">
        {currentEvents.length ? (
          /* If there is one current event or more, display it */
          <>
            {currentEvents.length > 1 ? (
              <h2>Evénements à venir</h2>
            ) : (
              <h2>Evénement à venir</h2>
            )}
            {currentEvents.map((element) => {
              return (
                <div key={element.id}>
                  <h3>
                    {element.name}
                    <span>
                      {" "}
                      le {element.date} à {element.hour}
                    </span>
                  </h3>
                  <img src={element.urlImage} alt={element.name} />
                  <div className="description-event">
                    <p>
                      {element.description.split("\n").map((element, index) => {
                        return (
                          <span key={index}>
                            {element}
                            <br />
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
          </>
        ) : events.length ? (
          /* If not, display the last past event (first of the list) */
          <div className="last-event">
            <h2>Dernier événement</h2>
            <h3>
              {events[0].name}
              <span> du {events[0].date}</span>
            </h3>
            <img src={events[0].urlImage} alt={events[0].name} />
            <div className="description-event">
              <p>
                {events[0].description.split("\n").map((element, index) => {
                  return (
                    <span key={index}>
                      {element}
                      <br />
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="container-past-event">
        {events.length > 1 ? <h2>Evénements passés</h2> : ""}
        {events &&
          events.map((eve) => {
            if (eve.isCurrent === 0 && !currentEvents.includes(eve.id)) {
              return (
                <div key={eve.date} className="description-event">
                  <h3>
                    {eve.name}
                    <span> le {eve.date}</span>
                  </h3>
                  <p>
                    <img src={eve.urlImage} alt={eve.name} />
                    {eve.description.split("\n").map((element, index) => {
                      return (
                        <span key={index}>
                          {element}
                          <br />
                        </span>
                      );
                    })}
                  </p>
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
