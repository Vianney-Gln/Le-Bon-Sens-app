import React, { useState, useEffect } from "react";
//Service
import {
  postOneProduct,
  getOneProductById,
  updateOneProduct,
} from "../services/products";
//Routing
import { useNavigate } from "react-router-dom";
//Helper
import getDataInput, { handleForm } from "../helpers/form";

const FormProduct = ({ operation, idProductToManage }) => {
  /* -----Navigate----- */
  const navigate = useNavigate();
  /* -----States-----*/
  const [dataProduct, setDataProduct] = useState({});
  const [error, setError] = useState(false); // state true if error while sending post request- Manage the color of the message
  const [message, setMessage] = useState(""); // message success or fail depending to the request

  //getting all infos for one product on component mounting IF operation === updateProduct
  useEffect(() => {
    if (operation === "updateProduct") {
      getOneProductById(idProductToManage)
        .then((result) => setDataProduct(result))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      {operation === "addProduct" && <h3>Ajouter des produits en stock</h3>}
      {operation === "updateProduct" && <h3>Modifier un produit en stock</h3>}
      <form
        onSubmit={(e) => {
          if (operation === "addProduct") {
            handleForm(
              e,
              postOneProduct,
              setMessage,
              setError,
              dataProduct,
              navigate,
              operation
            );
          } else if (operation === "updateProduct") {
            handleForm(
              e,
              updateOneProduct,
              setMessage,
              setError,
              dataProduct,
              navigate,
              operation,
              idProductToManage
            );
          }
        }}
      >
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="nom du produit"
            defaultValue={operation === "updateProduct" ? dataProduct.name : ""}
            onChange={(e) =>
              getDataInput(dataProduct, setDataProduct, e.target.value, "name")
            }
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
            onChange={(e) =>
              getDataInput(dataProduct, setDataProduct, e.target.value, "price")
            }
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
            onChange={(e) =>
              getDataInput(
                dataProduct,
                setDataProduct,
                e.target.value,
                "urlImage"
              )
            }
          ></input>
        </label>
        <label htmlFor="category">
          <select
            name="category"
            id="category"
            onChange={(e) =>
              getDataInput(
                dataProduct,
                setDataProduct,
                Number(e.target.value),
                "id_categoryProducts"
              )
            }
          >
            <option value="" className="option-fake">
              -catégories de produit-
            </option>
            <option value="1">Tous les produits</option>
            <option value="11">Viandes</option>
            <option value="21">Légumes</option>
            <option value="31">Produits laitiers</option>
            <option value="41">Produits locaux divers</option>
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
