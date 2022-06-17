import React, { useState, useEffect } from "react";
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
  const [arrayParam, setArrayParam] = useState([]);

  // Array with all possible param.operation
  const paramOperation = [
    "addProduct",
    "manageProduct",
    "updateProduct",
    "addRecipe",
    "updateShop",
    "manageRecipes",
    "updateRecipe",
    "createEvent",
    "manageEvents",
    "updateEvent",
    "updateProductor",
    "addProductor",
    "manageProductors",
    "manageCarrouselProductor",
  ];

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
          <li className={!param.operation ? "current-tab" : ""}>
            <Link to="/admin">Accueil</Link>
          </li>
          <li className="stick">|</li>
          <li
            className={
              param.operation === "addProduct" ||
              param.operation === "manageProduct" ||
              param.operation === "updateProduct"
                ? "tab-products current-tab"
                : "tab-products"
            }
          >
            produits
            <ul className="menu-products">
              <li>
                <Link to="/admin/addProduct">Ajouter des produits</Link>
              </li>
              <li>
                <Link to="/admin/manageProduct">Gérer les produits</Link>
              </li>
            </ul>
          </li>
          <li className="stick">|</li>
          <li
            className={
              param.operation === "addRecipe" ||
              param.operation === "manageRecipes" ||
              param.operation === "updateRecipe"
                ? "tab-recipes current-tab"
                : "tab-recipes"
            }
          >
            Recettes
            <ul className="menu-recipes">
              <li>
                <Link to="/admin/addRecipe">Ajouter des recettes</Link>
              </li>
              <li>
                <Link to="/admin/manageRecipes">Gérer les recettes</Link>
              </li>
            </ul>
          </li>
          <li className="stick">|</li>
          <li
            className={
              param.operation === "createEvent" ||
              param.operation === "manageEvents" ||
              param.operation === "updateEvent"
                ? "tab-events current-tab"
                : "tab-events"
            }
          >
            Evénements
            <ul className="menu-events">
              <li>
                <Link to="/admin/createEvent">Ajouter des événements</Link>
              </li>
              <li>
                <Link to="/admin/manageEvents">Gérer les événements</Link>
              </li>
            </ul>
          </li>
          <li className="stick">|</li>
          <li
            className={
              param.operation === "updateShop"
                ? "tab-shop current-tab"
                : "tab-shop"
            }
          >
            <Link to="/admin/updateShop">Magasin</Link>
          </li>
          <li className="stick">|</li>
          <li
            className={
              param.operation === "addProductor" ||
              param.operation === "manageProductors" ||
              param.operation === "manageCarrouselProductor" ||
              param.operation === "updateProductor"
                ? "tab-productors current-tab"
                : "tab-productors"
            }
          >
            Producteurs
            <ul className="menu-productors">
              <li>
                <Link to="/admin/addProductor">Ajouter un producteur</Link>
              </li>
              <li>
                <Link to="/admin/manageProductors">Gérer les producteurs</Link>
              </li>
            </ul>
          </li>
          <li className="stick">|</li>
          <li
            role={"presentation"}
            onClick={() => disconnect()}
            className="tab-deconnexion"
          >
            Déconnexion
          </li>
        </ul>
        <ul className="container-list-rubrics-mobile">
          <li className={!param.operation ? "current-tab" : ""}>
            <Link to="/admin">Accueil</Link>
          </li>
          <li className={param.operation === "addProduct" ? "current-tab" : ""}>
            <Link to="/admin/addProduct">Ajouter un produit</Link>
          </li>
          <li
            className={param.operation === "manageProduct" ? "current-tab" : ""}
          >
            <Link to="/admin/manageProduct">Gérer les produits</Link>
          </li>
          <li
            className={param.operation === "createEvent" ? "current-tab" : ""}
          >
            <Link to="/admin/createEvent">Ajouter un événement</Link>
          </li>
          <li
            className={param.operation === "manageEvents" ? "current-tab" : ""}
          >
            <Link to="/admin/manageEvents">Gérer les événements</Link>
          </li>
          <li className={param.operation === "addRecipe" ? "current-tab" : ""}>
            <Link to="/admin/addRecipe">Ajouter une recette</Link>
          </li>
          <li
            className={param.operation === "manageRecipes" ? "current-tab" : ""}
          >
            <Link to="/admin/manageRecipes">Gérer les recettes</Link>
          </li>
          <li
            className={param.operation === "addProductor" ? "current-tab" : ""}
          >
            <Link to="/admin/addProductor">Ajouter un producteur</Link>
          </li>
          <li
            className={
              param.operation === "manageProductors" ? "current-tab" : ""
            }
          >
            <Link to="/admin/manageProductors">Gérer les producteurs</Link>
          </li>
          <li className={param.operation === "updateShop" ? "current-tab" : ""}>
            <Link to="/admin/updateShop">Gérer le magasin</Link>
          </li>
          <li onClick={() => disconnect()}>Déconnexion</li>
        </ul>
        <div className="container-rubric">
          {!param.operation && <AdminHome />}

          {param.operation && paramOperation.indexOf(param.operation) === -1 ? (
            <AdminHome />
          ) : null}

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
