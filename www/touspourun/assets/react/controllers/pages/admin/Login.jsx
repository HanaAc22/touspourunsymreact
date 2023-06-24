import React, { useState } from "react";
import "../../../../styles/login.css";
import ReCAPTCHA from "react-google-recaptcha";
import { validEmail, validNameRgex, validPassword } from "../../_utils/Regex";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { axios } from "axios";

export default function Login() {
  const [pwValueVisible, setPwValueVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgErr, setMsg] = useState(false);
  const apiUrl = "http://localhost:48000/api";

  const showPassword = (e) => {
    console.log(pwValueVisible)
    e.preventDefault();
    setPwValueVisible(!pwValueVisible);
    console.log(pwValueVisible)
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (userName == "" || !validNameRgex.test(userName)) {
      setUserNameErr(true);
    }
    if (validNameRgex.test(userName)) {
      setUserNameErr(false);
    }
    if (!validEmail.test(email)) {
      setMsg(true);
    }
    if (validEmail.test(email)) {
      setMsg(false);
    }
    if (!validPassword.test(password)) {
      setMsg(true);
    }
    if (validPassword.test(password)) {
      setMsg(false);
    }
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="loginContainer">
      <h1>Page de connexion</h1>
      <div className="parag">
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

      <div className="form">
        <div className="group">
          <label htmlFor="_username">Pseudo* :</label>
          <input
            type="username"
            id="usernamelog"
            name="_username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required></input>
        </div>

        <div className="group">
          <label htmlFor="login">Email* :</label>
          <input
            type="email"
            id="emaillog"
            name="_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="group">
          <label htmlFor="password">Mot de passe* :</label>
          <div className="showPW">
            <input
              type={pwValueVisible ? "text" : "password"}
              id="password"
              name="_password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="eyeShow" onClick={showPassword}>
              {pwValueVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>

          <a href="#">Mot de passe oublié ?</a>
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
          {/* <button type="submit" onClick={onSubmit} disabled={verified}> */}
          <button className="soumettre" type="submit" onClick={onSubmit}>
            Connexion
          </button>
        </div>
      </div>
      <a href="/register">Je n'ai pas de compte</a>
    </div>
  );
}
