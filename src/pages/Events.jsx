import React from "react";
// style
import "../styles/events.scss";
// images
import vegetableGarden from "../images/potager-visite.jpg";

const Events = () => (
  <div className="container-events">
    <div className="container-event-comming">
      <h1>Evènement à venir</h1>
      <h3>Visite du potager ludique le Mercredi 23 Février 2022 à 14H.</h3>
      <img src={vegetableGarden} alt="vegetableGarden" />
      <p className="description-event">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae
        quas voluptatum quibusdam reprehenderit id earum natus eligendi harum
        eaque. Sit reiciendis, earum quaerat cupiditate repellendus possimus
        tempore corporis reprehenderit.
      </p>
    </div>
  </div>
);

export default Events;
