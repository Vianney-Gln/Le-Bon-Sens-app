import React from "react";

// style
import "../styles/recipes.scss";

const Recipes = () => {
  document.title = "Le Bon Sens - Recettes";
  // data static temporal
  const number = 10;
  const arrayRecipe = [];
  const recipe = (
    <div className="card-recipes">
      <h2>Titre recette</h2>
      <div className="image" />
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa
          tempora suscipit modi alias quisquam et ea assumenda facilis
          temporibus unde, quo voluptate incidunt expedita atque itaque fuga
          sapiente quod!
        </p>
        <p className="detail-recipe">
          <span>temps de cuisson:20min</span>
          <span>temps de préparation:20min</span>
        </p>
      </div>
    </div>
  );

  for (let i = 0; i < number; i += 1) {
    arrayRecipe.push(recipe);
  }

  return (
    <div className="container-recipes">
      <h1>Quelques recettes ...</h1>
      <label htmlFor="search-recipes">
        <input name="search-recipes" type="text" placeholder="search" />
      </label>
      <div className="container-center-cards-recipes">
        <div className="container-cards-recipes">{arrayRecipe}</div>
      </div>
    </div>
  );
};
export default Recipes;
