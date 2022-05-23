import React, { useState, useEffect } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Services
import {
  addRecipe,
  getOneRecipeById,
  updateOneRecipeById,
} from "../services/recipes";
// Helper
import getDataInput, { handleForm } from "../helpers/form";
// Style
import "../styles/formRecipe.scss";

const FormRecipe = ({ operation, idRecipeToManage }) => {
  /* -------- States -------- */
  const [dataRecipe, setDataRecipe] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  /* ------- UseNavigate ------- */
  const navigate = useNavigate();

  // Getting all infos for a recipe by his id on component mounting (useEffect) if operation === updateRecipe
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

  return (
    <div className="container-addRecipe">
      <form
        className="formRecipe"
        onSubmit={(e) => {
          if (operation === "addRecipe") {
            handleForm(
              e,
              addRecipe,
              setMessage,
              setError,
              dataRecipe,
              navigate,
              operation
            );
          } else if (operation === "updateRecipe") {
            handleForm(
              e,
              updateOneRecipeById,
              setMessage,
              setError,
              dataRecipe,
              navigate,
              operation,
              idRecipeToManage
            );
          }
        }}
      >
        {operation === "addRecipe" ? (
          <h3>Ajouter une recette</h3>
        ) : (
          <h3>Modifier une recette</h3>
        )}
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="nom de la recette"
            id="name"
            defaultValue={operation === "updateRecipe" ? dataRecipe.name : ""}
            onChange={(e) =>
              getDataInput(dataRecipe, setDataRecipe, e.target.value, "name")
            }
          ></input>
        </label>
        <label htmlFor="description">
          <textarea
            type="text"
            name="description"
            placeholder="description de la recette"
            id="description"
            defaultValue={
              operation === "updateRecipe" ? dataRecipe.description : ""
            }
            onChange={(e) =>
              getDataInput(
                dataRecipe,
                setDataRecipe,
                e.target.value,
                "description"
              )
            }
          ></textarea>
        </label>
        <div className="container-fields-cooking-preparation">
          <label htmlFor="cooking time">
            <input
              type="number"
              placeholder="temps de cuisson"
              name="cooking time"
              id="cooking time"
              defaultValue={
                operation === "updateRecipe" ? dataRecipe.cookingTime : ""
              }
              onChange={(e) =>
                getDataInput(
                  dataRecipe,
                  setDataRecipe,
                  e.target.value,
                  "cookingTime"
                )
              }
            ></input>
          </label>
          <label htmlFor="preparation time">
            <input
              type="number"
              placeholder="temps de préparation"
              name="preparation time"
              id="preparation time"
              defaultValue={
                operation === "updateRecipe" ? dataRecipe.preparationTime : ""
              }
              onChange={(e) =>
                getDataInput(
                  dataRecipe,
                  setDataRecipe,
                  e.target.value,
                  "preparationTime"
                )
              }
            ></input>
          </label>
        </div>
        <label htmlFor="urlImage">
          <input
            type="text"
            placeholder="url de l'image"
            name="urlImage"
            id="urlImage"
            defaultValue={
              operation === "updateRecipe" ? dataRecipe.urlImage : ""
            }
            onChange={(e) =>
              getDataInput(
                dataRecipe,
                setDataRecipe,
                e.target.value,
                "urlImage"
              )
            }
          ></input>
        </label>
        {operation === "addRecipe" ? (
          <button type="submit">Ajouter</button>
        ) : (
          <button type="submit">Modifier</button>
        )}
        {<p className={!error ? "success" : "fail"}>{message && message}</p>}
      </form>
    </div>
  );
};

export default FormRecipe;
