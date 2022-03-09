import React, { useState, useEffect } from "react";
//style
import "../styles/deleteProduct.scss";
//service
import getProducts from "../services/products";
//components
import CardsProducts from "../components/cardsProducts";

const DeleteProduct = () => {
  /*----- states -----*/
  const [productsToDelete, setProductsToDelete] = useState([]);

  /*----- getting all products on component mounting -----*/
  useEffect(() => {
    getProducts().then((result) => {
      setProductsToDelete(result);
      console.log(result);
    });
  }, []);
  return (
    <>
      <h3>Supprimer un produit</h3>
      <div className="container-products-to-delete">
        <ul className="container-list-products-to-delete">
          {productsToDelete &&
            productsToDelete.map((prod) => (
              <CardsProducts
                key={prod.id}
                productName={prod.name}
                productPrice={prod.price}
                productImage={prod.urlImage}
                toDelete={true}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default DeleteProduct;
