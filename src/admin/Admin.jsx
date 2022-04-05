import React, { useState } from "react";
//routing
import { Link, useParams } from "react-router-dom";
//styles
import "../styles/admin.scss";
import "../styles/formAdmin.scss"; // all forms admin

//components admin
import FormProduct from "./FormProduct";
import ManageProduct from "./ManageProduct";
import FormRecipe from "./FormRecipe";
import FormShop from "./FormShop";
import ManageRecipes from "./ManageRecipes";
import FormEvents from "./FormEvents";
import ManageEvents from "./ManageEvents";

const Admin = () => {
  /* ----- doc title ----- */
  document.title = "Le Bon Sens - Admin";

  /* ----- params ----- */
  const param = useParams();

  /* ----- states -----*/

  const [idProductToManage, setIdProductToManage] = useState(""); // id product to manage
  const [idRecipeToManage, setIdRecipeToManage] = useState(""); // id recipe to manage

  return (
    <div className="container-admin">
      <h1>Bienvenue dans votre espace admin</h1>
      <div className="admin-description">
        <p>
          Ici vous avez la possibilité de gérer le contenu des différentes pages
          qui composent le site web en cliquant sur l’une des rubriques ci
          dessous.
        </p>
      </div>
      <div className="container-rubrics-form">
        <ul className="container-list-rubrics">
          <Link to="/admin/addProduct">
            <li>Ajouter des produits en stock</li>
          </Link>

          <Link to="/admin/manageProduct">
            <li>Gérer les produits</li>
          </Link>
          <Link to="/admin/addRecipe">
            <li>Ajouter une recette</li>
          </Link>
          <Link to="/admin/manageRecipes">
            <li>Gérer les recettes</li>
          </Link>
          <li>Ajouter un producteur</li>
          <li>Gérer les producteurs</li>
          <li>Supprimer un producteur</li>
          <Link to="/admin/updateShop">
            <li>Modifier les infos du magasin</li>
          </Link>
          <Link to="/admin/createEvent">
            <li>Ajouter un évènement</li>
          </Link>
          <Link to="/admin/manageEvents">
            <li>Gérer les évènements</li>
          </Link>
          <li>Déconnexion</li>
        </ul>

        <div className="container-rubric">
          {param.operation === "addProduct" && (
            <FormProduct operation={param.operation} />
          )}
          {param.operation === "manageProduct" && (
            <ManageProduct
              idProductToManage={idProductToManage}
              setIdProductToManage={setIdProductToManage}
            />
          )}
          {param.operation === "updateProduct" && (
            <FormProduct
              operation={param.operation}
              idProductToManage={idProductToManage}
            />
          )}
          {param.operation === "addRecipe" && (
            <FormRecipe operation={param.operation} />
          )}
          {param.operation === "updateShop" && <FormShop />}
          {param.operation === "manageRecipes" && (
            <ManageRecipes
              setIdRecipeToManage={setIdRecipeToManage}
              idRecipeToManage={idRecipeToManage}
            />
          )}
          {param.operation === "updateRecipe" && (
            <FormRecipe
              operation={param.operation}
              idRecipeToManage={idRecipeToManage}
            />
          )}
          {param.operation === "createEvent" && <FormEvents />}
          {param.operation === "manageEvents" && <ManageEvents />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
