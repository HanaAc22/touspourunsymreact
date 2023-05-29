import "../../../../styles/login.css";
import React, { useState } from "react";

const Login = () => {
  //créer un token
  const saveToken = () => {
    localStorage.setItem("token", token);
  };
  const onSubmit = (e) => {
    fetch
      .post("/profile")
      .then((res) => {
        saveToken(res.data.access_token);
        console.log(token);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="loginContainer">
      <p className="left">* éléments requis pour l'authentification</p>
      <h1>Connexion</h1>

      <form method="post" action="/profile">
        <label htmlFor="login">E-mail* :</label>
        <input type="text" placeholder="email" name="login" required></input>
        <label htmlFor="password">Mot de passe* :</label>
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          required></input>
        <a href="/">Mot de passe oublié ?</a>
        <div className="storage">
          <input type="checkbox" /> <label>Se souvenir de moi</label>
        </div>
        <button type="submit" onClick={onSubmit}>
          Connexion
        </button>
      </form>

      <a href="/register">Je n'ai pas de compte</a>
    </div>
  );
};

export default Login;
