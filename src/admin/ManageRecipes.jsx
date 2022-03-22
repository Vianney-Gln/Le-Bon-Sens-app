import React, { useEffect, useState } from "react";
//service
import getRecipes from "../services/recipes";
//styles
import "../styles/manageRecipes.scss";
//modal
import Modal from "react-modal";
//component
import CardRecipe from "../components/CardRecipe";

const ManageRecipes = () => {
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

  /* ------ MODAL ------- */
  Modal.setAppElement("#root");
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  //style Modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "240px",
      height: "160px",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>Etes vous sûr de vouloir supprimer ce produit?</p>

        <div className="container-buttons-modal">
          <button type="button" onClick={() => runDeleteOneRecipe()}>
            oui
          </button>
          <button type="button" onClick={() => closeModal()}>
            non
          </button>
        </div>
      </Modal>
      <div className="container-manage-recipes">
        <h3>Gérer les recettes</h3>
        <div className="container-recipes-to-manage">
          <ul className="container-list-recipes-to-manage">
            {listRecipes &&
              listRecipes.map((recipe) => (
                <CardRecipe
                  key={recipe.id}
                  name={recipe.name}
                  description={recipe.description}
                  cookingTime={recipe.cookingTime}
                  preparationTime={recipe.preparationTime}
                  urlImage={recipe.urlImage}
                  manageRecipe={true}
                  openModal={openModal}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ManageRecipes;
