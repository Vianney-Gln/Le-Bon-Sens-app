import React, { useState, useEffect } from "react";
//routing
import { useNavigate } from "react-router-dom";

//service
import {
  addRecipe,
  getOneRecipeById,
  updateOneRecipeById,
} from "../services/recipes";

const FormRecipe = ({ operation, idRecipeToManage }) => {
  /* -------- states -------- */
  const [dataRecipe, setDataRecipe] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(false);

  /* ------- Navigate ------- */
  const navigate = useNavigate();

  /**
   * function getting all infos from the form and turn them into an object
   * @param {string || number} value
   * @param {string} key
   */
  const getDataRecipeForm = (value, key) => {
    const newData = dataRecipe;
    newData[key] = value;
    setDataRecipe(newData);
  };

  /**
   * function removing all fields
   */
  const resetFields = () => {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("cooking time").value = "";
    document.getElementById("preparation time").value = "";
    document.getElementById("urlImage").value = "";
  };

  // getting all infos for a recipe by his id on component mounting (useEffect) if operation === updateRecipe

  useEffect(() => {
    if (operation === "updateRecipe") {
      getOneRecipeById(idRecipeToManage)
        .then((result) => {
          setDataRecipe(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  /**
   * function running addRecipe, update a successMessage, remove dataRecipeToAdd and remove fields if success.
   * If not success, just update a failMessage
   * @param {*} e
   */
  const handleFormPostRecipes = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    addRecipe(dataRecipe, token)
      .then(() => {
        setSuccessMessage("recette postée avec succès");
        setError(false);
        setDataRecipe({
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

  const handleFormUpdateRecipe = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    updateOneRecipeById(dataRecipe, idRecipeToManage, token)
      .then(() => {
        setSuccessMessage(
          "recette modifiée avec succès, vous allez être redirigé à la page admin d'accueil"
        );
        setError(false);
      })
      .then(() => {
        setTimeout(() => {
          navigate("/admin");
        }, 3000);
      })
      .catch(() => {
        setError(true);
        setSuccessMessage(
          "Il y a eu une erreur lors de la modification de la recette"
        );
      });
  };
  return (
    <div className="container-addRecipe">
      {operation === "addRecipe" ? (
        <h3>Ajouter une recette</h3>
      ) : (
        <h3>Modifier une recette</h3>
      )}
      <form
        onSubmit={
          operation === "addRecipe"
            ? handleFormPostRecipes
            : handleFormUpdateRecipe
        }
      >
        <label htmlFor="name">
          <span>nom de la recette:</span>
          <input
            type="text"
            name="name"
            placeholder="nom de la recette"
            id="name"
            defaultValue={operation === "updateRecipe" ? dataRecipe.name : ""}
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
            defaultValue={
              operation === "updateRecipe" ? dataRecipe.description : ""
            }
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
            defaultValue={
              operation === "updateRecipe" ? dataRecipe.cookingTime : ""
            }
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
            defaultValue={
              operation === "updateRecipe" ? dataRecipe.preparationTime : ""
            }
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
            defaultValue={
              operation === "updateRecipe" ? dataRecipe.urlImage : ""
            }
            onChange={(e) => getDataRecipeForm(e.target.value, "urlImage")}
          ></input>
        </label>
        {operation === "addRecipe" ? (
          <button type="submit">Ajouter</button>
        ) : (
          <button type="submit">Modifier</button>
        )}
        {successMessage && (
          <p className={!error ? "success" : "fail"}>{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default FormRecipe;
