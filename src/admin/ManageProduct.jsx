import React, { useState, useEffect } from "react";
//routing
import { useNavigate } from "react-router-dom";
//style
import "../styles/manageProduct.scss";
//service
import getProducts, { deleteOneProduct } from "../services/products";
//components
import CardsProducts from "../components/cardsProducts";
import Modal1 from "../components/Modal";
import { verifyToken } from "../services/auth";
const ManageProduct = ({ setIdProductToManage, idProductToManage }) => {
  /* -----navigate -----*/
  const navigate = useNavigate();
  /*----- states -----*/
  const [productsToManage, setProductsToManage] = useState([]); //array recieving result.data from service
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal
  const [message, setMessage] = useState("");
  const [sortParam, setSortParam] = useState("");
  const [searchParam, setSearchParam] = useState("");
  /* -----functions running Modal -----*/

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  /*----- getting all products on component mounting only connected as admin -----*/
  useEffect(() => {
    const token = localStorage.getItem("token_access_le_bon_sens");
    verifyToken(token).then((result) => {
      if (result.data) {
        getProducts(sortParam, searchParam)
          .then((result) => {
            setProductsToManage(result);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        navigate("/login");
      }
    });
  }, [sortParam, searchParam]);

  return (
    <>
      <Modal1
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        message={message}
        setMessage={setMessage}
        idProductToManage={idProductToManage}
      />

      <h3>Gérer les produits</h3>
      <div className="container-search-sort">
        <label htmlFor="search">
          <input
            onChange={(e) => setSearchParam(e.target.value)}
            type="text"
            name="search"
            placeholder="rechercher"
          />
        </label>
        <label htmlFor="category">
          <select
            onChange={(e) => setSortParam(e.target.value)}
            name="category"
          >
            <option value="">Tous les produits</option>
            <option value="vegetables">légumes</option>
            <option value="meats">viandes</option>
            <option value="dairy products">produits laitiers</option>
            <option value="other locals products">produits divers</option>
          </select>
        </label>
      </div>
      <div className="container-products-to-manage">
        <ul className="container-list-products-to-manage">
          {productsToManage &&
            productsToManage.map((prod) => (
              <CardsProducts
                key={prod.id}
                productId={prod.id}
                productName={prod.name}
                productPrice={prod.price}
                productImage={prod.urlImage}
                toManage={true}
                openModal={openModal}
                setIdProductToManage={setIdProductToManage}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default ManageProduct;
