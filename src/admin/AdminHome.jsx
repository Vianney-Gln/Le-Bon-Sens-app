import React from "react";
// Style
import "../styles/adminHome.scss";
// Image
import engrenages from "../images/engrenages.png";

const AdminHome = () => {
  return (
    <div className="container-adminHome">
      <p>Bienvenue dans l'espace admin!</p>
      <img src={engrenages} alt="engrenages" />
    </div>
  );
};

export default AdminHome;
