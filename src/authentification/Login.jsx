import React, { useState, useEffect } from "react";
// Services
import authentificate, {
  changePasswordRequest,
  updatePassword,
} from "../services/auth";
// Routing
import {
  Link,
  useNavigate,
  useSearchParams,
  useParams,
} from "react-router-dom";

// Style
import "../styles/login.scss";

const Login = () => {
  // Navigate
  const navigate = useNavigate();
  // UseSearchParams
  const [searchParams] = useSearchParams();
  const tempUuid = searchParams.get("tempUuid");
  // UseParams
  const param = useParams();
  // States
  const [creds, setCreds] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  /**
   * Function getting credentials from inputs
   * @param {String} value
   * @param {String} type
   */
  const getCredentialsFromInput = (value, type) => {
    if (tempUuid && param.operation === "resetPassword") {
      creds.tempUuid = tempUuid;
    }
    const newCreds = creds;
    creds[type] = value;
    setCreds(newCreds);
  };
  /**
   * Function running authentificate from service, store the token in the localstorage and redirect to /admin
   * @param {Event} e
   */
  const runAuthentificate = (e) => {
    e.preventDefault();
    authentificate(creds)
      .then((result) => {
        setMessage("");
        setError(false);
        localStorage.setItem("token_access_le_bon_sens", result);
        navigate("/admin");
      })
      .catch(() => {
        setMessage("mot de passe ou email incorrect");
        setError(true);
      });
  };
  /**
   * Function running the service function changePasswordRequest tests
   * @param {Event} e
   */
  const runChangePasswordRequest = (e) => {
    e.preventDefault();
    changePasswordRequest(creds)
      .then(() => {
        setMessage("un lien de réinitialisation vous a été envoyé");
        setError(false);
      })
      .catch(() => {
        setMessage("l'adresse email saisie n'existe pas");
        setError(true);
      });
  };
  // Function deleting success message or failed message on componant mount
  useEffect(() => {
    setMessage("");
  }, [param.operation]);

  /**
   * Function running the service updatePassword, setMessages
   * @param {Event} e
   */
  const runUpdatePassword = (e) => {
    e.preventDefault();
    if (creds.hashedPassword === confirmPassword) {
      updatePassword(creds)
        .then(() => {
          setError(false);
          setMessage(
            "votre mot de passe à bien été réinitialisé, vous allez être redirigé sur la page login"
          );
          setTimeout(() => {
            navigate("/login");
          }, 4000);
        })
        .catch((err) => {
          setError(true);
          if (err.message === "Request failed with status code 401") {
            setMessage(
              "le mot de passe doit comporter entre 8 et 20 caractères"
            );
          } else if (err.message === "Request failed with status code 404") {
            setMessage("votre demande de réinitialisation à expiré");
          } else {
            setMessage(
              "il y eu une erreur lors de la requête, veuillez réesayer"
            );
          }
        });
    } else if (creds.password === confirmPassword) {
      setError(true);
      setMessage("Le mot de passe n'a pas pu être réinitialisé");
    } else {
      setError(true);
      setMessage("les deux mots de passes saisis doivent être identiques");
    }
  };

  return (
    <div className="container-login">
      <h1>
        {param.operation === "forgetPassword"
          ? "Réinitialisation du mot de passe"
          : "Se connecter"}
      </h1>
      <form
        onSubmit={
          param.operation === "forgetPassword"
            ? runChangePasswordRequest
            : param.operation === "resetPassword"
            ? runUpdatePassword
            : runAuthentificate
        }
      >
        <p>
          {param.operation === "forgetPassword"
            ? "Pour réinitialiser votre mot de passe, veuillez entrer votre adresse email svp"
            : param.operation === "resetPassword"
            ? "Veuillez entrer votre nouveau mot de passe et le confirmer"
            : ""}
        </p>
        {!param.operation || param.operation === "forgetPassword" ? (
          <label htmlFor="email">
            <span>Votre adresse mail:</span>
            <input
              onChange={(e) => getCredentialsFromInput(e.target.value, "email")}
              type="email"
              name="email"
              placeholder="email"
            />
          </label>
        ) : (
          ""
        )}
        {!param.operation || param.operation === "resetPassword" ? (
          <label htmlFor="password">
            <span>
              {param.operation === "resetPassword"
                ? "Votre nouveau mot de passe:"
                : "Votre mot de passe"}
            </span>
            <input
              onChange={(e) => {
                if (tempUuid && param.operation === "resetPassword") {
                  getCredentialsFromInput(e.target.value, "hashedPassword");
                } else {
                  getCredentialsFromInput(e.target.value, "password");
                }
              }}
              type="password"
              name="password"
              placeholder="mot de passe"
            />
          </label>
        ) : (
          ""
        )}
        {param.operation === "resetPassword" && (
          <label htmlFor="confirmpassword">
            <span>confirmez votre nouveau mot de passe:</span>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="confirmpassword"
              placeholder="mot de passe"
            />
          </label>
        )}
        <button type="submit">
          {!param.operation
            ? "se connecter"
            : param.operation === "forgetPassword"
            ? "envoyer"
            : "valider"}
        </button>
        {!param.operation && (
          <p className="forget-password">
            <Link to="/login/forgetPassword">j'ai oublié mon mot de passe</Link>
          </p>
        )}
        {message && <p className={error ? "fail" : "success"}>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
