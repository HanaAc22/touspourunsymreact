import React, { useState } from "react";
import "../../../../styles/login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReCAPTCHA from "react-google-recaptcha";

const Subscribe = () => {
  const [pwValueVisible, setPwValueVisible] = useState(false);
  const [profilChoice, setProfilChoice] = useState("");
  const [boolVisible, setBooVisible] = useState(false);

  const showPassword = (e) => {
    e.preventDefault();
    setPwValueVisible(!pwValueVisible);
  };

  const changeProfilValue = (event) => {
    setProfilChoice(event.target.value);
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setVerified(true);
  };

  const nextStepVisible = () => {
    setBooVisible(true);
  };

  return (
    <div className="subsribeContainer" style={{ padding: 100 }}>
      <h1>Rejoignez-nous en complétant le formulaire !</h1>
      <div className="commonInfo">
        <h2>Informations générales</h2>
        <div className="groupformName group showPW">
          <div>
            <label htmlFor="firstname">Prénom :</label>
            <input
              type="firstname"
              id="firstname"
              name="firstname"
              placeholder="Prénom"></input>
            </div>
            <div>
            <label htmlFor="lastname">Nom :</label>
            <input
              type="lastname"
              id="lastname"
              name="lastname"
              placeholder="Nom"></input>
          </div>
        </div>
        <div className="group input">
          <label htmlFor="username">Pseudo :</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="Pseudo"></input>
        </div>
        <div className="group input">
          <label htmlFor="email">E-mail :</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"></input>
        </div>
        <div className="showPW group input">
          <label htmlFor="password">Mot de passe :</label>
          <div className="showPW">
            <input
              type={pwValueVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Mot de passe"
            />
            <button className="eyeShow" onChange={showPassword}>
              {pwValueVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
        </div>
        <div className="showPW group input">
          <label htmlFor="confirm_pw">Confirmer le mot de passe :</label>
          <div className="showPW">
            <input
              type="password"
              id="confirm_pw"
              name="confirm_pw"
              placeholder="Confirmer le mot de passe"></input>
            <button className="eyeShow" onChange={showPassword}>
              {pwValueVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
        </div>
        <div className="group input">
          <label htmlFor="roleType">Profile :</label>
          <select id="roleType" name="roleType" onChange={changeProfilValue}>
            <option>Mon profile type</option>
            <option value="parent">Parent</option>
            <option value="prof">Enseignant</option>
            <option value="asso">Association</option>
          </select>
        </div>
        <div
          className="profForm"
          style={{
            display: profilChoice == "prof" ? "block" : "none",
          }}>
            <h2>Informations liées à l'enseignement</h2>
          <div className="group input">
            <label htmlFor="levelTeaching">Niveau d'enseignement :</label>
            <select id="levelTeaching" name="levelTeaching">
              <option>Niveau d'enseignement</option>
              <option value="primaire">Primaire</option>
              <option value="college">Collège</option>
              <option value="lycee">Lycée</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div className="group input">
            <label htmlFor="schoolName">Nom d'établissement :</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              placeholder="Nom d'établissement"
            />
          </div>
          <div className="group input">
            <label htmlFor="schoolCity">Département de l'établissement :</label>
            <input
              type="text"
              id="schoolCity"
              name="schoolCity"
              placeholder="Département de l'établissement"
            />
          </div>
          <div>
            <button className="soumettre nextBtn" onClick={nextStepVisible}>
              Suivant
            </button>
          </div>
        </div>
        <div
          style={{ display: profilChoice == "asso" ? "block" : "none" }}>
          <h2>Informations liées à l'association</h2>
          <div className="group input">
            <label htmlFor="siret">N° SIRET</label>
            <input type="text" id="siret" name="siret" placeholder="N° SIRET" />
          </div>
          <div className="group input">
            <label htmlFor="assoAdress">Adresse de l'association :</label>
            <input
              type="text"
              id="assoAdress"
              name="assoAdress"
              placeholder="Adresse de l'association"
            />
            <div>
              <label htmlFor="assoZipcode">Code postal :</label>
              <input
                type="text"
                id="assoZipcode"
                name="assoZipcode"
                placeholder="Code postal"
              />
              <label htmlFor="assoCity">Commune :</label>
              <input
                type="text"
                id="assoCity"
                name="assoassoCity"
                placeholder="Commune"
              />
            </div>
          </div>
          <div>
            <button className="soumettre nextBtn" onClick={nextStepVisible}>
              Suivant
            </button>
          </div>
        </div>
        <div
          className="finalForm"
          style={{
            display:
              profilChoice == "parent" || boolVisible ? "block" : "none",
          }}>
          <ReCAPTCHA
            sitekey="6Lc2sGkmAAAAAIlDYxj_zWGjOYnAw0dbOKWXqKL-"
            onChange={onChange}
          />
          <button type="submit" className="soumettre">
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
