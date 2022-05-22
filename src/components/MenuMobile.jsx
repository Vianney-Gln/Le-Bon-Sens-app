import React, { useState } from "react";
// Menu Burger React
import { slide as Menu } from "react-burger-menu";
// Style
import "../styles/menu-mobile.scss";
// Routing
import { Link } from "react-router-dom";

const MenuMobile = () => {
  // States
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
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
      right
      width={"100%"}
      isOpen={menuOpen}
      onStateChange={(state) => setMenuOpen(state.isOpen)}
    >
      <ul className="list-tabs">
        <li className="menu-item">
          <Link onClick={() => closeMenu()} to="/products">
            Produits
          </Link>
        </li>
        <li className="menu-item">
          <Link onClick={() => closeMenu()} to="/events">
            Evénements
          </Link>
        </li>
        <li className="menu-item">
          <Link onClick={() => closeMenu()} to="/recipes">
            Recettes
          </Link>
        </li>
        <li className="menu-item">
          <Link onClick={() => closeMenu()} to="/find-us">
            Nous contacter
          </Link>
        </li>
        <li className="menu-item">Producteurs</li>
      </ul>
    </Menu>
  );
};

export default MenuMobile;
