import React, { useState } from "react";
//style
import "../styles/admin.scss";
//components admin
import FormAddProduct from "./FormAddProduct";
import DeleteProduct from "./DeleteProduct";

const Admin = () => {
  /* ----- doc title ----- */
  document.title = "Le Bon Sens - Admin";

  /* ----- states -----*/
  const [operation, setOperation] = useState(""); // this state define the component that will be used in the div below "container-rubric"
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
        <ul>
          <li onClick={() => setOperation("addProduct")}>
            Ajouter des produits en stock
          </li>

          <li onClick={() => setOperation("deleteProduct")}>
            Supprimer un produit du stock
          </li>
          <li>Ajouter une recette</li>
          <li>Supprimer une recette</li>
          <li>Ajouter un producteur</li>
          <li>Modifier les infos d'un producteur</li>
          <li>Supprimer un producteur</li>
          <li>Modifier les infos du magasin</li>
          <li>Ajouter un évènement</li>
          <li>Supprimer un évènement</li>
          <li>Déconnexion</li>
        </ul>

        <div className="container-rubric">
          {operation === "addProduct" ? (
            <FormAddProduct />
          ) : operation === "" ? (
            <FormAddProduct />
          ) : (
            ""
          )}
          {operation === "deleteProduct" && <DeleteProduct />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
