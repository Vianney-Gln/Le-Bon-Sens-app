import React, { useState } from "react";
//service
//Routing
import { Link, useNavigate } from "react-router-dom";
import authentificate, { changePasswordRequest } from "../services/auth";
import { useSearchParams } from "react-router-dom";
//style
import "../styles/login.scss";

const Login = ({ passwordForget, changePassword }) => {
  //navigate
  const navigate = useNavigate();
  //useSearchParams
  const [searchParams] = useSearchParams();
  const tempUuid = searchParams.get("tempUuid");
  //states
  const [creds, setCreds] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
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
  /**
   * function running the service function changePasswordRequest tests
   * @param {*} e
   */
  const runChangePasswordRequest = (e) => {
    e.preventDefault();
    changePasswordRequest(creds)
      .then(() => {
        setMessage("un lien de réinitialisation vous a été envoyer");
        setError(false);
      })
      .catch(() => {
        setMessage("l'adresse email saisie n'existe pas");
        setError(true);
      });
  };

  return (
    <div className="container-login">
      <h1>
        {!passwordForget ? "Se connecter" : "Réinitialisation du mot de passe"}
      </h1>

      <form
        onSubmit={
          !passwordForget ? runAuthentificate : runChangePasswordRequest
        }
      >
        <p>
          {passwordForget
            ? "Veuillez entrer votre adresse email, un lien de réinitialisation de votre mot de passe vous sera envoyer"
            : changePassword
            ? "Veuillez entrer votre nouveau mot de passe et le confirmer"
            : ""}
        </p>
        {!changePassword && (
          <label html="email">
            <span>Votre adresse mail:</span>
            <input
              onChange={(e) => getCredentialsFromInput(e.target.value, "email")}
              type="email"
              name="email"
              placeholder="email"
            />
          </label>
        )}
        {!passwordForget && (
          <label htmlFor="password">
            <span>Votre mot de passe:</span>
            <input
              onChange={(e) =>
                getCredentialsFromInput(e.target.value, "password")
              }
              type="password"
              name="password"
              placeholder="mot de passe"
            />
          </label>
        )}
        {changePassword && (
          <label htmlFor="confirmpassword">
            <span>confirmez votre mot de passe:</span>
            <input
              onChange={(e) =>
                getCredentialsFromInput(e.target.value, "confirmpassword")
              }
              type="password"
              name="confirmpassword"
              placeholder="mot de passe"
            />
          </label>
        )}
        <button type="submit">
          {!passwordForget && changePassword
            ? "valider"
            : !passwordForget
            ? "se connecter"
            : "envoyer"}
        </button>
        {!passwordForget && !changePassword && (
          <p>
            <Link to="/resetPassword">j'ai oublié mon mot de passe</Link>
          </p>
        )}
        {message && <p className={error ? "fail" : "success"}>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
