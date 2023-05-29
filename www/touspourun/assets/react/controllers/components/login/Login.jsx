import React, { useState } from "react";
import "../../../../styles/login.css";

export default function Login() {
  let token ;
  const onSubmit = (e) => {
    try {
        localStorage.setItem("token", token);
        console.log(token);
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="loginContainer">
      <h1>Page de connexion</h1>
      <div>
        <p className="left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, optio.</p>
        <p className="left">* éléments requis pour l'authentification</p>
      </div>

      <form action="/login" method="post">
       
        <div className="group">
          <label htmlFor="_username">Pseudo* :</label>
          <input type="username" id="username" name="_username"></input>
        </div>

        <div className="group">
          <label htmlFor="login">Email* :</label>
          <input type="email" id="email" name="_email" />
        </div>

        <div className="group">
          <label htmlFor="password">Mot de passe* :</label>
          <input type="password" id="password" name="_password" />
          <a href="/">Mot de passe oublié ?</a>
          {/* <input type="text" name="_csrf_token" value="{{ csrf_token('authenticate') }}" /> */}
        </div>
        <div className="storage">
          <input type="checkbox" className="checkbox" /><label>Se souvenir de moi</label>
        </div>
        <div className="group">
          {/* ligne non fonctionnelle */}
          {/* <input type="hidden" name="app_profile" value="/profile" />  */}
          <button type="submit" onClick={onSubmit}>Connexion</button>
        </div>
      </form>
      <a href="/register">Je n'ai pas de compte</a>
    </div>
  );
}
