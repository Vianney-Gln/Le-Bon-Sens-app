import React, { useState } from "react";
//service
//Routing
import { Link, useNavigate } from "react-router-dom";
import authentificate from "../services/auth";
//style
import "../styles/login.scss";

const Login = ({ passwordForget }) => {
  //navigate
  const navigate = useNavigate();
  //states
  const [creds, setCreds] = useState({});
  const [message, setMessage] = useState("");
  /**
   * function getting credentials from inputs
   * @param {*} value
   * @param {string} type
   */
  const getCredentialsFromInput = (value, type) => {
    const newCreds = creds;
    creds[type] = value;
    setCreds(newCreds);
  };
  /**
   * function running authentificate from service and store the token in the localstorage
   * @param {*} e
   */
  const runAuthentificate = (e) => {
    e.preventDefault();
    authentificate(creds)
      .then((result) => {
        setMessage("");
        localStorage.setItem("token_access_le_bon_sens", result);
        navigate("/admin");
      })
      .catch(() => {
        setMessage("mot de passe ou email incorrect");
      });
  };
  return (
    <div className="container-login">
      <h1>
        {!passwordForget ? "Se connecter" : "Réinitialisation du mot de passe"}
      </h1>

      <form onSubmit={!passwordForget && runAuthentificate}>
        {passwordForget && (
          <p>
            Veuillez entrer votre adresse email, un lien de réinitialisation de
            votre mot de passe vous sera envoyer
          </p>
        )}
        <label html="email">
          <span>Votre adresse mail:</span>
          <input
            onChange={(e) => getCredentialsFromInput(e.target.value, "email")}
            type="email"
            name="email"
            placeholder="email"
          />
        </label>
        {!passwordForget && (
          <label htmlFor="password">
            <span>Votre mot de passe:</span>
            <input
              onChange={(e) =>
                getCredentialsFromInput(e.target.value, "password")
              }
              type="password"
              name="password"
              placeholder="password"
            />
          </label>
        )}
        <button type="submit">
          {!passwordForget ? "se connecter" : "envoyer"}
        </button>
        {!passwordForget && (
          <p>
            <Link to="/changePassword">j'ai oublié mon mot de passe</Link>
          </p>
        )}
        {message && <p className="fail">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
