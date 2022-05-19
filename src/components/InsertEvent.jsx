import React from "react";
// Style
import "../styles/insertEvent.scss";
// Routing
import { Link } from "react-router-dom";

const InsertEvent = ({ setCurrEvents }) => (
  <div className="insert-event">
    <Link to="/events">
      <p>Nouvel évènement disponible!</p>
    </Link>
    <button type="button" onClick={() => setCurrEvents([])}>
      fermer
    </button>
  </div>
);

export default InsertEvent;
