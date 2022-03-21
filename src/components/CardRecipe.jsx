import React from "react";
//styles
import "../styles/cardRecipes.scss";
const CardRecipe = ({
  name,
  description,
  cookingTime,
  preparationTime,
  urlImage,
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
    </div>
  </div>
);

export default CardRecipe;
