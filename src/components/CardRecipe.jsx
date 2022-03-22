import React from "react";
//styles
import "../styles/cardRecipes.scss";
const CardRecipe = ({
  id,
  name,
  description,
  cookingTime,
  preparationTime,
  urlImage,
  manageRecipe,
  openModal,
  setIdToManage,
}) => (
  <div className="card-recipes">
    <h2>{name}</h2>
    <div className="image">
      <img src={urlImage} alt={name} />
    </div>
    <div className="container-description">
      <p className="description">{description}</p>
      <p className="detail-recipe">
        <span>temps de cuisson: {cookingTime + "min"}</span>
        <span>temps de préparation: {preparationTime + "min"}</span>
      </p>
      {/* ------- only in admin panel --------- */}
      {manageRecipe && (
        <div className="container-buttons-managerecipe">
          <button
            onClick={() => {
              openModal();
              setIdToManage(id);
            }}
            type="button"
          >
            supprimer
          </button>
          <button onClick={() => console.log("modifier")} type="button">
            modifier
          </button>
        </div>
      )}
    </div>
  </div>
);

export default CardRecipe;
