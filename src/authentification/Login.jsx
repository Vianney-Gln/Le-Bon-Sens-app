import React from "react";
//style
import "../styles/login.scss";

const Login = ({ setIsAuth, isAuth }) => {
  const authenticate = (e) => {
    e.preventDefautl();
    console.log("auth ....");
  };
  return (
    <div className="container-login">
      <h1>Login</h1>
      <form onSubmit={authenticate}>
        <label html="email">
          <span>Votre adresse mail:</span>
          <input type="email" name="email" placeholder="email" />
        </label>
        <label htmlFor="password">
          <span>Votre mot de passe:</span>
          <input type="password" name="password" placeholder="password" />
        </label>
        <button type="submit">se connecter</button>
      </form>
    </div>
  );
};

export default Login;
