import React from "react";
//style
import "../styles/formCarrouselProductors.scss";

const FormCarrouselProductors = ({ idProductorToManage }) => {
  return (
    <div className="container-formCarrouselProductor">
      <h3>Gestion des images du carrousel</h3>
      <form>
        <label htmlFor="urlImageCarrousel">
          <input
            type="text"
            name="urlImageCarrousel"
            placeholder="saisissez ici l'url de l'image"
          ></input>
        </label>
        <button type="submit">Valider</button>
      </form>
      <div className="container-preview-image">
        <h3>Aperçu des images du carrousel</h3>
      </div>
    </div>
  );
};

export default FormCarrouselProductors;
