import React, { useState } from "react";
//Style
import "../styles/formCarrouselProductors.scss";
//Helper
import getDataInput from "../helpers/form";

const FormCarrouselProductors = ({ idProductorToManage }) => {
  //States
  const [dataCarrousel, setDataCarrousel] = useState({});
  return (
    <div className="container-formCarrouselProductor">
      <h3>Ajouter des images au carrousel</h3>
      <form>
        <label htmlFor="urlImageCarrousel">
          <input
            type="text"
            name="urlImageCarrousel"
            placeholder="saisissez ici l'url de l'image"
            onChange={(e) => {
              getDataInput(
                dataCarrousel,
                setDataCarrousel,
                e.target.value,
                "urlImageCarrousel"
              );
            }}
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
