import React, { useState } from "react";

//service
import { addRecipe } from "../services/recipes";

const AddRecipe = () => {
  /* -------- states -------- */
  const [dataRecipeToAdd, setDataRecipeToAdd] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(false);

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

  const resetFields = () => {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("cooking time").value = "";
    document.getElementById("preparation time").value = "";
    document.getElementById("urlImage").value = "";
  };

  /**
   * function running addRecipe, update a successMessage, remove dataRecipeToAdd and remove fields if success.
   * If not success, just update a failMessage
   * @param {*} e
   */

  const handleFormRecipes = (e) => {
    e.preventDefault();
    addRecipe(dataRecipeToAdd)
      .then(() => {
        setSuccessMessage("recette postée avec succès");
        setError(false);
        setDataRecipeToAdd({
          name: "",
          description: "",
          cookingTime: "",
          preparationTime: "",
          urlImage: "",
        });
        setTimeout(() => {
          resetFields();
        }, 2000);
      })
      .catch(() => {
        setSuccessMessage("erreur d'envois de la recette");
        setError(true);
      });
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
            id="name"
            onChange={(e) => getDataRecipeForm(e.target.value, "name")}
          ></input>
        </label>
        <label htmlFor="description">
          <span>description de la recette</span>
          <textarea
            type="text"
            name="description"
            placeholder="description de la recette"
            id="description"
            onChange={(e) => getDataRecipeForm(e.target.value, "description")}
          ></textarea>
        </label>
        <label htmlFor="cooking time">
          <span>temps de cuisson:</span>
          <input
            type="number"
            placeholder="temps de cuisson"
            name="cooking time"
            id="cooking time"
            onChange={(e) => getDataRecipeForm(e.target.value, "cookingTime")}
          ></input>
        </label>
        <label htmlFor="preparation time">
          <span>temps de préparation</span>
          <input
            type="number"
            placeholder="temps de préparation"
            name="preparation time"
            id="preparation time"
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
            id="urlImage"
            onChange={(e) => getDataRecipeForm(e.target.value, "urlImage")}
          ></input>
        </label>
        <button type="submit">Ajouter</button>
        {successMessage && (
          <p className={!error ? "success" : "fail"}>{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AddRecipe;
