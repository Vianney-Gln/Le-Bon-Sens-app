import React from "react";

const CardRecipe = () => (
  <div className="card-recipes">
    <h2>Titre recette</h2>
    <div className="image" />
    <div className="description">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa
        tempora suscipit modi alias quisquam et ea assumenda facilis temporibus
        unde, quo voluptate incidunt expedita atque itaque fuga sapiente quod!
      </p>
      <p className="detail-recipe">
        <span>temps de cuisson:20min</span>
        <span>temps de préparation:20min</span>
      </p>
    </div>
  </div>
);

export default CardRecipe;
