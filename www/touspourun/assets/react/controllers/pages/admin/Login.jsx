import React, { useState } from "react";
import "../../../../styles/login.css";
import ReCAPTCHA from "react-google-recaptcha";
import { validEmail, validNameRgex, validPassword } from "../../_utils/Regex";

export default function Login() {
  let token;
  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgErr, setMsg] = useState(false);
  const [value, setValue] = useState("");
  const [verified, setVerified] = useState(false);
  const onSubmit = (e) => {

    //e.preventDefault();


    // if (userName == "" || !validNameRgex.test(userName)) {
    //   setUserNameErr(true);
    // }
    // if (validNameRgex.test(userName)) {
    //   setUserNameErr(false);
    // }
    // if (!validEmail.test(email)) {
    //   setMsg(true);
    // }
    // if (validEmail.test(email)) {
    //   setMsg(false);
    // }
    // if (!validPassword.test(password)) {
    //   setMsg(true);
    // }
    // if (validPassword.test(password)) {
    //   setMsg(false);
    // }

    function onChange(value) {
      console.log("Captcha value:", value);
      setVerified(true)
    }
  };

  return (
    <div className="loginContainer">
      <h1>Page de connexion</h1>
      <div>
        <p className="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          optio.
        </p>
        <p className="left">* éléments requis pour l'authentification</p>
      </div>
      <div className="error">
        {userNameErr && <p>Merci de renseigner correctement votre pseudo</p>}
        {msgErr && <p>Votre e-mail ou mot de passe est invalide</p>}
      </div>
      <form action="/" method="post">
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
          <input type="checkbox" className="checkbox" />
          <label>Se souvenir de moi</label>
        </div>
        <div className="group">
          {/* ligne non fonctionnelle */}
          {/* <input type="hidden" name="app_profile" value="/profile" />  */}
          <ReCAPTCHA
              sitekey="6Lc2sGkmAAAAAIlDYxj_zWGjOYnAw0dbOKWXqKL-"
              onChange={onChange}
          />
          <button type="submit" onClick={onSubmit} disabled={verified}>
            Connexion
          </button>
        </div>
      </form>
      <a href="/register">Je n'ai pas de compte</a>
    </div>
  );
}
