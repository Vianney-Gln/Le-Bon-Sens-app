import React, { useState, useEffect } from "react";
//routing
import { useNavigate } from "react-router-dom";
//style
import "../styles/manageProduct.scss";
//service
import getProducts, { deleteOneProduct } from "../services/products";
//components
import CardsProducts from "../components/cardsProducts";
//Modal
import Modal from "react-modal";
import { verifyToken } from "../services/auth";
const ManageProduct = ({ setIdProductToManage, idProductToManage }) => {
  /* -----navigate -----*/
  const navigate = useNavigate();
  /*----- states -----*/
  const [productsToManage, setProductsToManage] = useState([]); //array recieving result.data from service
  const [modalIsOpen, setIsOpen] = useState(false); //state Modal
  const [successMessage, setSuccessMessage] = useState("");
  const [sortParam, setSortParam] = useState("");
  const [searchParam, setSearchParam] = useState("");
  /* -----Modal -----*/
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

  /*----- getting all products on component mounting only connected as admin -----*/
  useEffect(() => {
    const token = localStorage.getItem("token");
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

  const runDeleteOneProduct = () => {
    const token = localStorage.getItem("token");
    deleteOneProduct(idProductToManage, { token })
      .then(() => {
        setSuccessMessage(
          "produit supprimé avec succès! vous serez redirigé..."
        );
        setTimeout(() => {
          closeModal();
          navigate("/admin");
        }, 3000);
      })
      .catch(() => {
        setSuccessMessage(
          "il y a eu une erreur lors de la suppression du produit, vous serez redirigé..."
        );
        setTimeout(() => {
          closeModal();
          navigate("/admin");
        }, 3000);
      });
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!successMessage && (
          <p>Etes vous sûr de vouloir supprimer ce produit?</p>
        )}
        {!successMessage && (
          <div className="container-buttons-modal">
            <button type="button" onClick={() => runDeleteOneProduct()}>
              oui
            </button>
            <button type="button" onClick={() => closeModal()}>
              non
            </button>
          </div>
        )}
        {successMessage && <p>{successMessage}</p>}
      </Modal>
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
