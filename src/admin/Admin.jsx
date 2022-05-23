import React, { useState } from "react";
// Routing
import { Link, useNavigate, useParams } from "react-router-dom";
// Styles
import "../styles/admin.scss";
import "../styles/formAdmin.scss"; // all forms admin

// Components admin
import FormProduct from "./FormProduct";
import ManageProduct from "./ManageProduct";
import FormRecipe from "./FormRecipe";
import FormShop from "./FormShop";
import ManageRecipes from "./ManageRecipes";
import FormEvents from "./FormEvents";
import ManageEvents from "./ManageEvents";
import FormProductors from "./FormProductors";
import ManageProductors from "./ManageProductors";
import FormCarrouselProductors from "./FormCarrouselProductors";
import AdminHome from "./AdminHome";

const Admin = () => {
  /* ----- Doc title ----- */
  document.title = "Le Bon Sens - Admin";

  /* ----- UseParams ----- */
  const param = useParams();

  /* ----- States -----*/

  const [idProductToManage, setIdProductToManage] = useState(""); // id product to manage
  const [idRecipeToManage, setIdRecipeToManage] = useState(""); // id recipe to manage
  const [idEventToManage, setIdEventToManage] = useState(""); // id event to manage
  const [idProductorToManage, setIdProductorToManage] = useState(""); // id productor to manage
  const [idCarrouselItemToManage, setIdCarrouselItemToManage] = useState(""); // id item carrousel to manage

  /* ----- UseNavigate ------ */
  const navigate = useNavigate();
  const disconnect = () => {
    localStorage.removeItem("token_access_le_bon_sens");
    navigate("/");
  };
  return (
    <div className="container-admin">
      <div className="container-title">
        <h1>Espace admin</h1>
      </div>
      <div className="container-rubrics-form">
        <ul className="container-list-rubrics">
          <li>
            <Link to="/admin">Accueil</Link>
          </li>
          <li>|</li>
          <li className="tab-products">
            produits
            <ul className="menu-products">
              <li className="addProducts">Ajouter des produits</li>
              <li className="manageProducts">Gérer les produits</li>
            </ul>
          </li>
          <li>|</li>
          <li className="tab-recipes">
            Recettes
            <ul className="menu-recipes">
              <li className="addRecipes">Ajouter des recettes</li>
              <li className="manageRecipes">Gérer les recettes</li>
            </ul>
          </li>
          <li>|</li>
          <li className="tab-shop">Magasin</li>
          <li>|</li>
          <li className="tab-productors">Producteurs</li>
          <li>|</li>
          <li
            role={"presentation"}
            onClick={() => disconnect()}
            className="tab-deconnexion"
          >
            Déconnexion
          </li>
          {/* <Link to="/admin/addProduct">
            <li title="Ajouter des produits en stock">
              Ajouter des produits en stock
            </li>
          </Link>
          <Link to="/admin/manageProduct">
            <li title="Gérer les produits">Gérer les produits</li>
          </Link>
          <Link to="/admin/addRecipe">
            <li title="Ajouter une recette">Ajouter une recette</li>
          </Link>
          <Link to="/admin/manageRecipes">
            <li title="Gérer les recettes">Gérer les recettes</li>
          </Link>
          <Link to="/admin/addProductor">
            <li title="Ajouter un producteur">Ajouter un producteur</li>
          </Link>
          <Link to="/admin/manageProductors">
            <li title="Gérer les producteurs">Gérer les producteurs</li>
          </Link>
          <Link to="/admin/updateShop">
            <li title="Modifier les infos du magasin">
              Modifier les infos du magasin
            </li>
          </Link>
          <Link to="/admin/createEvent">
            <li title="Ajouter un événement">Ajouter un événement</li>
          </Link>
          <Link to="/admin/manageEvents">
            <li title="Gérer les événements">Gérer les événements</li>
          </Link>
          <li
            title="Déconnexion"
            className="deconnexion"
            role={"presentation"}
            onClick={() => disconnect()}
          >
            Déconnexion
          </li> */}
        </ul>
        <div className="container-rubric">
          {!param.operation && <AdminHome />}
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
          {param.operation === "createEvent" && (
            <FormEvents
              operation={param.operation}
              idEventToManage={idEventToManage}
            />
          )}
          {param.operation === "manageEvents" && (
            <ManageEvents
              idEventToManage={idEventToManage}
              setIdEventToManage={setIdEventToManage}
            />
          )}
          {param.operation === "updateEvent" && (
            <FormEvents
              operation={param.operation}
              idEventToManage={idEventToManage}
            />
          )}
          {param.operation === "updateProductor" && (
            <FormProductors
              operation={param.operation}
              idProductorToManage={idProductorToManage}
            />
          )}
          {param.operation === "addProductor" && (
            <FormProductors operation={param.operation} />
          )}
          {param.operation === "manageProductors" && (
            <ManageProductors
              idProductorToManage={idProductorToManage}
              setIdProductorToManage={setIdProductorToManage}
            />
          )}
          {param.operation === "manageCarrouselProductor" && (
            <FormCarrouselProductors
              operation={param.operation}
              idProductorToManage={idProductorToManage}
              idCarrouselItemToManage={idCarrouselItemToManage}
              setIdCarrouselItemToManage={setIdCarrouselItemToManage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
