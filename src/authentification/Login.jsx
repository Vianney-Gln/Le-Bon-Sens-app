import React, { useState } from "react";
//service
//Routing
import { useNavigate } from "react-router-dom";
import authentificate from "../services/auth";
//style
import "../styles/login.scss";

const Login = ({ setInfosAdmin }) => {
  //navigate
  const navigate = useNavigate();
  //states
  const [creds, setCreds] = useState({});
  const [message, setMessage] = useState("");

  const getCredentialsFromInput = (value, type) => {
    const newCreds = creds;
    creds[type] = value;
    setCreds(newCreds);
  };
  const runAuthentificate = (e) => {
    e.preventDefault();
    authentificate(creds)
      .then((result) => {
        setMessage("");
        setInfosAdmin(result);
        navigate("/admin");
      })
      .catch(() => {
        setMessage("mot de passe ou email incorrect");
      });
  };
  return (
    <div className="container-login">
      <h1>Login</h1>
      <form onSubmit={runAuthentificate}>
        <label html="email">
          <span>Votre adresse mail:</span>
          <input
            onChange={(e) => getCredentialsFromInput(e.target.value, "email")}
            type="email"
            name="email"
            placeholder="email"
          />
        </label>
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
        <button type="submit">se connecter</button>
        {message && <p className="fail">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
