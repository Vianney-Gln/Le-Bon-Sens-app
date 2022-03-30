import React, { useState, useEffect } from "react";
// style
import "../styles/recipes.scss";
// service
import getRecipes from "../services/recipes";
// component
import CardRecipe from "../components/CardRecipe";

const Recipes = () => {
  /* ----- doc title -----*/
  document.title = "Le Bon Sens - Recettes";

  /* ----- variables statement -----*/
  const [recipes, setRecipes] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  /* ----- getting all recipes on mounting componant or recipes in terms of searchParams -----*/
  useEffect(() => {
    getRecipes(searchParam).then((rcp) => setRecipes(rcp));
  }, [searchParam]);

  return (
    <div className="container-recipes">
      <h1>Quelques recettes ...</h1>

      <label htmlFor="search-recipes">
        <input
          onChange={(e) => setSearchParam(e.target.value)}
          name="search-recipes"
          type="text"
          placeholder="search"
        />
      </label>
      <div className="container-center-cards-recipes">
        <div className="container-cards-recipes">
          {recipes.length &&
            recipes.map((recipe) => (
              <CardRecipe
                key={recipe.id}
                name={recipe.name}
                description={recipe.description}
                cookingTime={recipe.cookingTime}
                preparationTime={recipe.preparationTime}
                urlImage={recipe.urlImage}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Recipes;
