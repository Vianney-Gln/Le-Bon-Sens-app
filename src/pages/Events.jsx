import React, { useState, useEffect } from "react";
// Style
import "../styles/events.scss";
// Service
import getInfosEvents from "../services/events";

const Events = ({ setInsert }) => {
  // Doc title
  document.title = "Le Bon Sens - Evènements";
  // Variables statement
  const [currentEvents, setCurrentEvents] = useState([]); // currents events
  const [events, setEvents] = useState([]); // all other events

  // Getting all infos about events on component mounting
  useEffect(() => {
    /* ------ disable insert event ------*/
    setInsert(false);
    getInfosEvents().then((evts) => {
      evts.forEach((evt) => {
        if (evt.isCurrent === 1) {
          setCurrentEvents((oldEvents) => [...oldEvents, evt]); // "push" currents events
        }
        setEvents((oldEvents) => [...oldEvents, evt]); // "push" past events
      });
    });
  }, []);
  return (
    <div className="container-events">
      <h1>Evènements</h1>
      <div className="container-event-comming">
        {currentEvents.length ? (
          /* If there is one current event or more, display it */
          <>
            {currentEvents.length > 1 ? (
              <h2>Evènements à venir</h2>
            ) : (
              <h2>Evènement à venir</h2>
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
            <h2>Dernier évènement</h2>
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
        <h2>Evènements passés</h2>
        {events &&
          events.map((eve) => {
            if (eve.isCurrent === 0 && eve.date !== events[0].date) {
              return (
                <div key={eve.date} className="description-event">
                  <h3>
                    {eve.name}
                    <span> le {eve.date}</span>
                  </h3>
                  <p>
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
