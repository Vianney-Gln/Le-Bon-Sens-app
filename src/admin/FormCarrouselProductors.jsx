import React, { useState } from "react";
//Routing
import { useNavigate } from "react-router-dom";
//Style
import "../styles/formCarrouselProductors.scss";
//Helper
import getDataInput from "../helpers/form";
import { handleForm } from "../helpers/form";
//Service
import { addOneCarrouselItem } from "../services/productors";

const FormCarrouselProductors = ({ idProductorToManage, operation }) => {
  //States
  const [dataCarrousel, setDataCarrousel] = useState({
    id_productors: idProductorToManage,
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  //useNavigate
  const navigate = useNavigate();
  return (
    <div className="container-formCarrouselProductor">
      <h3>Ajouter des images au carrousel</h3>
      <form
        onSubmit={(e) =>
          handleForm(
            e,
            addOneCarrouselItem,
            setMessage,
            setError,
            dataCarrousel,
            navigate,
            operation
          )
        }
      >
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
              console.log(dataCarrousel);
            }}
          ></input>
        </label>
        <button type="submit">Valider</button>
        {message && <p className={!error ? "success" : "fail"}>{message}</p>}
      </form>
      <div className="container-preview-image">
        <h3>Aperçu des images du carrousel</h3>
      </div>
    </div>
  );
};

export default FormCarrouselProductors;
