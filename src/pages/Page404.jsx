import React from "react";
// Style
import "../styles/page404.scss";
// Routing
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page404">
      <p className="txt404">404</p>
      <p className="txt-page-not-found">Désolé cette page est introuvable</p>
      <Link to="/">retour</Link>
    </div>
  );
};

export default Page404;
