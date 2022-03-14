import React, { useState, useEffect } from "react";
//style
import "../styles/formProduct.scss";
//service
import {
  postOneProduct,
  getOneProductById,
  updateOneProduct,
} from "../services/products";

import { useNavigate } from "react-router-dom";

const FormProduct = ({ operation, idProductToManage }) => {
  /* -----Navigate----- */
  const navigate = useNavigate();
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
  const handleFormPost = (e) => {
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

  //getting all infos for one product on component mounting IF operation === updateProduct
  useEffect(() => {
    if (operation === "updateProduct") {
      getOneProductById(idProductToManage)
        .then((result) => setDataProduct(result))
        .catch((err) => console.log(err));
    }
  }, []);

  //function update test (temp)
  const handleFormUpdate = (e) => {
    e.preventDefault();
    updateOneProduct(dataProduct, idProductToManage)
      .then(() => {
        setMessage("produit correctement mis à jour");
        setError(false);
      })
      .then(() => {
        setTimeout(() => {
          navigate("/admin/addProduct");
        }, 3000);
      })
      .catch(() => {
        setMessage(
          "il y a eu une erreur lors de la mise à jour, veuillez vérifier vos champs"
        );
        setError(true);
      });
  };
  return (
    <>
      {operation === "addProduct" && <h3>Ajouter des produits en stock</h3>}
      {operation === "updateProduct" && <h3>Modifier un produit en stock</h3>}
      <form
        onSubmit={
          operation === "addProduct" ? handleFormPost : handleFormUpdate
        }
      >
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="nom du produit"
            defaultValue={operation === "updateProduct" ? dataProduct.name : ""}
            onChange={(e) => getDataProduct(e.target.value, "name")}
          ></input>
        </label>
        <label htmlFor="price">
          <input
            type="text"
            name="price"
            id="price"
            placeholder="prix du produit (exemple:1.49€/kg)"
            defaultValue={
              operation === "updateProduct" ? dataProduct.price : ""
            }
            onChange={(e) => getDataProduct(e.target.value, "price")}
          ></input>
        </label>
        <label htmlFor="urlImage">
          <input
            type="text"
            name="urlImage"
            id="urlImage"
            placeholder="entrez une url image"
            defaultValue={
              operation === "updateProduct" ? dataProduct.urlImage : ""
            }
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
        {operation === "addProduct" && <button type="submit">valider</button>}
        {operation === "updateProduct" && (
          <button type="submit">modifier</button>
        )}
        {message && <p className={error ? "fail" : "success"}>{message}</p>}
      </form>
    </>
  );
};

export default FormProduct;
