import React, { useState } from "react";

const AddRecipe = () => {
  /* -------- states -------- */
  const [dataRecipeToAdd, setDataRecipeToAdd] = useState({});

  /**
   * function getting all infos from the form and turn them into an object
   * @param {string || number} value
   * @param {string} key
   */
  const getDataRecipeForm = (value, key) => {
    const newData = dataRecipeToAdd;
    newData[key] = value;
    setDataRecipeToAdd(newData);
  };

  const handleFormRecipes = (e) => {
    e.preventDefault();
    console.log(dataRecipeToAdd);
  };
  return (
    <div className="container-addRecipe">
      <h3>Ajouter une recette</h3>
      <form onSubmit={handleFormRecipes}>
        <label htmlFor="name">
          <span>nom de la recette:</span>
          <input
            type="text"
            name="name"
            placeholder="nom de la recette"
            onChange={(e) => getDataRecipeForm(e.target.value, "name")}
          ></input>
        </label>
        <label htmlFor="description">
          <span>description de la recette</span>
          <textarea
            type="text"
            name="description"
            placeholder="description de la recette"
            onChange={(e) => getDataRecipeForm(e.target.value, "description")}
          ></textarea>
        </label>
        <label htmlFor="cooking time">
          <span>temps de cuisson:</span>
          <input
            type="number"
            placeholder="temps de cuisson"
            name="cooking time"
            onChange={(e) => getDataRecipeForm(e.target.value, "cookingTime")}
          ></input>
        </label>
        <label htmlFor="preparation time">
          <span>temps de préparation</span>
          <input
            type="number"
            placeholder="temps de préparation"
            name="preparation time"
            onChange={(e) =>
              getDataRecipeForm(e.target.value, "preparationTime")
            }
          ></input>
        </label>
        <label htmlFor="urlImage">
          <span>url de l'image</span>
          <input
            type="text"
            placeholder="url de l'image"
            name="urlImage"
            onChange={(e) => getDataRecipeForm(e.target.value, "urlImage")}
          ></input>
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddRecipe;
