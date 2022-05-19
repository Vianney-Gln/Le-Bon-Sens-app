import React, { useEffect, useState } from "react";
// Services
import getRecipes from "../services/recipes";
// Style
import "../styles/manageRecipes.scss";
// Components
import Modal1 from "../components/Modal";
import CardRecipe from "../components/CardRecipe";

const ManageRecipes = ({ idRecipeToManage, setIdRecipeToManage }) => {
  /* ------- STATES ------- */
  const [listRecipes, setListRecipes] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal

  /* ------- getting data recipes on component mounting ------- */
  useEffect(() => {
    getRecipes()
      .then((result) => setListRecipes(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /* ------ Functions running Modal ------- */

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal1
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        idRecipeToManage={idRecipeToManage}
      />

      <div className="container-manage-recipes">
        <h3>Gérer les recettes</h3>
        <div className="container-recipes-to-manage">
          <ul className="container-list-recipes-to-manage">
            {listRecipes &&
              listRecipes.map((recipe) => (
                <CardRecipe
                  key={recipe.id}
                  id={recipe.id}
                  name={recipe.name}
                  description={recipe.description}
                  cookingTime={recipe.cookingTime}
                  preparationTime={recipe.preparationTime}
                  urlImage={recipe.urlImage}
                  manageRecipe={true}
                  openModal={openModal}
                  setIdRecipeToManage={setIdRecipeToManage}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ManageRecipes;
