import React, { useEffect, useState } from "react";
//service
import getRecipes from "../services/recipes";
//styles
import "../styles/manageRecipes.scss";

//component
import CardRecipe from "../components/CardRecipe";

const ManageRecipes = () => {
  /* ------- STATES ------- */
  const [listRecipes, setListRecipes] = useState([]);

  /* ------- getting data recipes on compoent mounting ------- */
  useEffect(() => {
    getRecipes()
      .then((result) => setListRecipes(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-manage-recipes">
      <h3>Gérer les recettes</h3>
      <div className="container-recipes-to-manage">
        <ul className="container-list-recipes-to-manage">
          {listRecipes &&
            listRecipes.map((recipe) => (
              <CardRecipe
                key={recipe.id}
                name={recipe.name}
                description={recipe.description}
                cookingTime={recipe.cookingTime}
                preparationTime={recipe.preparationTime}
                urlImage={recipe.urlImage}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageRecipes;
