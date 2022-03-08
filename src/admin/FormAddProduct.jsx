import React from "react";
import "../styles/formAddProduct.scss";

const FormAddProduct = () => {
  return (
    <>
      <h3>Ajouter des produits en stock</h3>
      <form>
        <label htmlFor="name">
          <input type="text" name="name" placeholder="nom du produit"></input>
        </label>
        <label htmlFor="price">
          <input
            type="text"
            name="price"
            placeholder="prix du produit (exemple:1.49€/kg)"
          ></input>
        </label>
        <label htmlFor="urlImage">
          <input
            type="text"
            name="urlImage"
            placeholder="entrez une url image"
          ></input>
        </label>
        <label htmlFor="category">
          <select name="category">
            <option className="option-fake">-catégories de produit-</option>
            <option value="1">Tous les produits</option>
            <option value="2">Viandes</option>
            <option value="3">Légumes</option>
            <option value="4">Produits laitiers</option>
            <option value="5">Produits locaux divers</option>
          </select>
        </label>
        <button type="button">valider</button>
      </form>
    </>
  );
};

export default FormAddProduct;
