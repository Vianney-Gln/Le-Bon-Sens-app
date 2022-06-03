import React, { useContext } from "react";
// Styles
import "../styles/shop.scss";
//Routing
import { useNavigate } from "react-router-dom";
// Context
import { shopContext } from "../context/shop";

const Shop = () => {
  // Doc title
  document.title = "Le Bon Sens - Notre Magasin";
  // UseContext
  const ShopContext = useContext(shopContext);
  // UseNavigate
  const navigate = useNavigate();

  return (
    <div className="container-shop">
      <h1>Notre Magasin</h1>

      {ShopContext.infosShop.description1 && (
        <p className="description">
          {ShopContext.infosShop.description1
            .split("\n")
            .map((element, index) => {
              return (
                <span key={index}>
                  {element}
                  <br />
                </span>
              );
            })}
          Le Bon Sens a été créé en 2022 à l’occasion de l’installation du
          Potager Ludique. Cécile et Aurélien ont la volonté de créer un espace
          de lien entre producteurs bio locaux et les consommateurs, ouvrant
          leurs fermes aux visites et accueillant avec le sourire chaque client.
          Nos engagements : - Des fermes bio ou engagées en conversion vers
          l'agriculture biologique; - Des fermes à taille humaine; - Des
          produits locaux, frais, de saison; - Des fermes les plus locales
          possibles selon la disponibilité des produits sur le territoire du
          Pays d’Ancenis; - Des fermiers qui vendent ensemble leurs produits, en
          assurant la vente à tour de rôle; - La transparence sur les modes de
          production des produits proposés en magasin, par des fiches, le
          dialogue mais aussi par des visites de fermes; - Organisation de
          « marchés à la ferme » regroupant les différents producteurs qui
          vendent leurs produits au magasin pour que les consommateurs
          rencontrent leurs paysans locaux.
        </p>
      )}
      <div className="container-images">
        {ShopContext.infosShop.urlPhoto1 && (
          <div className="image">
            <img src={ShopContext.infosShop.urlPhoto1} alt="magasin" />
          </div>
        )}
        {ShopContext.infosShop.urlPhoto2 && (
          <div className="image">
            <img src={ShopContext.infosShop.urlPhoto2} alt="magasin" />
          </div>
        )}

        {ShopContext.infosShop.urlPhoto3 && (
          <div className="image">
            <img src={ShopContext.infosShop.urlPhoto3} alt="magasin" />
          </div>
        )}
      </div>

      <div className="charte">
        <button type="button" onClick={() => navigate("/find-us")}>
          Contactez nous!
        </button>
      </div>
    </div>
  );
};
export default Shop;
