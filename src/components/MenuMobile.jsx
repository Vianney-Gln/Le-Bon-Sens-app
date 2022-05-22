import React from "react";
// Menu Burger React
import { slide as Menu } from "react-burger-menu";
// Style
import "../styles/menu-mobile.scss";

const MenuMobile = ({ right, width, isOpen, setOpen }) => {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "20px",
      top: "20px",
    },
    bmBurgerBars: {
      background: "white",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Menu
      styles={styles}
      right={right}
      width={width}
      isOpen={isOpen}
      setOpen={setOpen}
    >
      <ul className="list-tabs">
        <li className="menu-item">Produits</li>
        <li className="menu-item">Evénements</li>
        <li className="menu-item">Recettes</li>
        <li className="menu-item">Nous contacter</li>
        <li className="menu-item">Producteurs</li>
      </ul>
    </Menu>
  );
};

export default MenuMobile;
