import React from "react";
// style
import "../styles/insertEvent.scss";

const InsertEvent = ({ disableInsert }) => (
  <div className="insert-event">
    <p>Nouvel évènement disponible!</p>
    <button type="button" onClick={() => disableInsert()}>
      fermer
    </button>
  </div>
);

export default InsertEvent;
