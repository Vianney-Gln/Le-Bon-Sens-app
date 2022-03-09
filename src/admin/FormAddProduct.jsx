import React, { useState } from "react";
//style
import "../styles/formAddProduct.scss";
//service
import { postOneProduct } from "../services/products";

const FormAddProduct = () => {
  /* -----states-----*/
  const [dataProduct, setDataProduct] = useState({});
  const [error, setError] = useState(false); // state true if error while sending post request- Manage the color of the message
  const [message, setMessage] = useState(""); // message success or fail depending to the request

  /**
   * function getting all infos from the form and turn them into an object in the state dataProduct
   * @param {string | number} value
   * @param {string} key
   */
  const getDataProduct = (value, key) => {
    const newData = dataProduct;
    newData[key] = value;
    setDataProduct(newData);
  };

  /**
   * function removing all fields after success request
   */
  const resetFields = () => {
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("urlImage").value = "";
    document.getElementById("category").value = "";
  };

  /**
   * function running the PostOneProduct from service and manage errors after submit form
   */
  const handleForm = (e) => {
    e.preventDefault();
    postOneProduct(dataProduct)
      .then(() => {
        setMessage("produit correctement ajouté");
        setError(false);
        setDataProduct({
          name: "",
          price: "",
          urlImage: "",
          id_categoryProducts: "",
        });
        resetFields();
      })
      .catch(() => {
        setMessage(
          "il y a eu une erreur lors de l'envois, veuillez vérifier vos champs"
        );
        setError(true);
      });
  };
  return (
    <>
      <h3>Ajouter des produits en stock</h3>
      <form onSubmit={handleForm}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="nom du produit"
            onChange={(e) => getDataProduct(e.target.value, "name")}
          ></input>
        </label>
        <label htmlFor="price">
          <input
            type="text"
            name="price"
            id="price"
            placeholder="prix du produit (exemple:1.49€/kg)"
            onChange={(e) => getDataProduct(e.target.value, "price")}
          ></input>
        </label>
        <label htmlFor="urlImage">
          <input
            type="text"
            name="urlImage"
            id="urlImage"
            placeholder="entrez une url image"
            onChange={(e) => getDataProduct(e.target.value, "urlImage")}
          ></input>
        </label>
        <label htmlFor="category">
          <select
            name="category"
            id="category"
            onChange={(e) =>
              getDataProduct(Number(e.target.value), "id_categoryProducts")
            }
          >
            <option value="" className="option-fake">
              -catégories de produit-
            </option>
            <option value="1">Tous les produits</option>
            <option value="2">Viandes</option>
            <option value="3">Légumes</option>
            <option value="4">Produits laitiers</option>
            <option value="5">Produits locaux divers</option>
          </select>
        </label>
        <button type="submit">valider</button>
        {message && <p className={error ? "fail" : "success"}>{message}</p>}
      </form>
    </>
  );
};

export default FormAddProduct;
