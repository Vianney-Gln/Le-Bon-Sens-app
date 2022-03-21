import React from "react";

const AddRecipe = () => {
  return (
    <div className="container-addRecipe">
      <h3>Ajouter une recette</h3>
      <form>
        <label htmlFor="name">
          <span>nom de la recette:</span>
          <input
            type="text"
            name="name"
            placeholder="nom de la recette"
          ></input>
        </label>
        <label htmlFor="description">
          <span>description de la recette</span>
          <textarea
            type="text"
            name="description"
            placeholder="description de la recette"
          ></textarea>
        </label>
        <label htmlFor="cooking time">
          <span>temps de cuisson:</span>
          <input
            type="number"
            placeholder="temps de cuisson"
            name="cooking time"
          ></input>
        </label>
        <label htmlFor="preparation time">
          <span>temps de préparation</span>
          <input
            type="number"
            placeholder="temps de préparation"
            name="preparation time"
          ></input>
        </label>
        <label htmlFor="urlImage">
          <span>url de l'image</span>
          <input
            type="text"
            placeholder="url de l'image"
            name="urlImage"
          ></input>
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddRecipe;
