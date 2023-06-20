import React, { useState } from "react";
import "../../../../styles/login.css";
import { validEmail, validNameRgex, validPassword, validSiret, validAdressRgex, validZipCode } from "../../_utils/Regex";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReCAPTCHA from "react-google-recaptcha";

const Subscribe = () => {
  //regex
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [pseudoErr, setPseudoErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState(false);
  const [confirmPw, setConfirmPw] = useState("");
  const [confirmPwErr, setConfirmPwErr] = useState(false);
  const [numSIRET, setNumSIRET] = useState("");
  const [numSIRETErr, setNumSIRETErr] = useState(false);
  const [school, setSchool] = useState("");
  const [schoolErr, setSchoolErr] = useState(false);
  const [adress, setAdress] = useState("");
  const [adressErr, setAdressErr] = useState(false);
  const [city, setCity] = useState("");
  const [cityErr, setCityErr] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [zipCodeErr, setZipCodeErr] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const [pwValueVisible, setPwValueVisible] = useState(false);
  const [profilChoice, setProfilChoice] = useState("");
  const [boolVisible, setBooVisible] = useState(false);

  const validate = () => {
    if (name == "" || !validNameRgex.test(name)) {
      setNameErr(true);
    }
    if (name != "" && validNameRgex.test(name)) {
      setNameErr(false);
    }
    if (firstName == "" || !validNameRgex.test(firstName)) {
      setFirstNameErr(true);
    }
    if (firstName != "" && validNameRgex.test(firstName)) {
      setFirstNameErr(false);
    }
    if (pseudo == "" || !validNameRgex.test(pseudo)) {
      setPseudoErr(true);
    }
    if (pseudo != "" && validNameRgex.test(pseudo)) {
      setPseudoErr(false);
    }
    if (email == "" || !validEmail.test(email)) {
      setEmailErr(true);
    }
    if (email != "" && validEmail.test(email)) {
      setEmailErr(false);
    }
    if (pw == "" || validPassword.test(pw)) {
      setPwErr(true);
    }
    if (pw != "" && validPassword.test(pw)) {
      setPwErr(false);
    }
    if (confirmPw != pw) {
      setConfirmPwErr(true);
    }
    if (confirmPw == pw) {
      setConfirmPwErr(false);
    }

    if (school == "" || !validNameRgex.test(school)) {
      setSchoolErr(true);
    }
    if (school != "" && validNameRgex.test(school)) {
      setSchoolErr(false);
    }
    if (numSIRET == "" || !validZipCode.test(numSIRET)) {
      setNumSIRETErr(true);
    }
    if (numSIRET != "" && validZipCode.test(numSIRET)) {
      setNumSIRETErr(false);
    }

    if (adress == "" || !validAdressRgex.test(adress)) {
      setAdressErr(true);
    }
    if (adress != "" && validAdressRgex.test(adress)) {
      setAdressErr(false);
    }
    if (city == "" || !validNameRgex.test(city)) {
      setCityErr(true);
    }
    if (city != "" && validNameRgex.test(city)) {
      setCityErr(false);
    }
    if (zipCode == "" || !validZipCode.test(zipCode)) {
      setZipCodeErr(true);
    }
    if (zipCode != "" && validZipCode.test(zipCode)) {
      setZipCodeErr(false);
    }


    // if (
    //   (validNameRgex.test(name)) && (validNameRgex.test(firstName)) &&
    //   (validEmail.test(email)) && (validPassword.test(pw)) && (pw == confirmPw)
    //   (validAdressRgex.test(adress)) && (validNameRgex.test(city)) && (validZipCode(zipCode)) && 
    //   (validSiret(numSIRET))
    // ) {
    //   setValidForm(true);
    // }
  };

  //password eye
  const showPassword = (e) => {
    e.preventDefault();
    setPwValueVisible(!pwValueVisible);
  };

  const changeProfilValue = (event) => {
    setProfilChoice(event.target.value);
  };
  const nextStepVisible = () => {
    setBooVisible(true);
  };

  // recaptcha
  const onChange = (value) => {
    console.log("Captcha value:", value);
    setVerified(true);
  };

  return (
    <div className="subsribeContainer" style={{ padding: 100 }}>
      <h1>Rejoignez-nous en complétant le formulaire !</h1>

      <form action="#" method="post">
        <div className="commonInfo">
          <h2>Informations générales</h2>
          <p className="left" style={{color: "green"}}>* éléments requis pour l'inscription</p>

          <div className="gender">
            <label >Genre :</label>
            <input type="radio" value="female" name="gender" label="Mme" />
            <label htmlFor="female">Mme</label>
            <input type="radio" value="male" name="gender" label="M." />
            <label htmlFor="male">M.</label>
            <input type="radio" value="other" name="gender" label="Autre" />
            <label htmlFor="autre">Autre</label>
          </div>

          <div className="groupformName group showPW">
            <div>
              {nameErr && <p>Merci de renseigner correctement votre nom</p>}
              {firstNameErr && (
                <p>Merci de renseigner correctement votre prénom</p>
              )}
              <label htmlFor="firstname">Prénom* :</label>
              <input
                type="firstname"
                id="firstname"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="Prénom"></input>
            </div>
            <div>
              <label htmlFor="lastname">Nom* :</label>
              <input
                type="lastname"
                id="lastname"
                name="lastname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Nom"></input>
            </div>
          </div>
          <div className="group input">
            {pseudoErr && <p>Merci de renseigner correctement votre pseudo</p>}
            <label htmlFor="username">Pseudo* :</label>
            <input
              type="username"
              id="username"
              name="username"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              required
              placeholder="Pseudo"></input>
          </div>
          <div className="group input">
          {emailErr && <p>Merci de renseigner correctement votre email</p>}
            <label htmlFor="email">E-mail* :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
              placeholder="E-mail"></input>
          </div>
          <div className="showPW group input">
          {pwErr && <p>Le mot de passe doit contenir au moins : 12 caractères, 1 Majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial</p>}
            <label htmlFor="password">Mot de passe* :</label>
            <div className="showPW">
              <input
                type={pwValueVisible ? "text" : "password"}
                id="password"
                name="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="Mot de passe"
                required
              />
              <button className="eyeShow" onChange={showPassword}>
                {pwValueVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </div>
          </div>
          <div className="showPW group input">
            <label htmlFor="confirm_pw">Confirmer le mot de passe* :</label>
            <div className="showPW">
            {confirmPwErr && <p>Les mots de passe ne sont pas identiques</p>}
              <input
                type="password"
                id="confirm_pw"
                name="confirm_pw"
                value={confirmPw}
                onChange={(e) => setConfirmPw(e.target.value)}
                required
                placeholder="Confirmer le mot de passe"></input>
              <button className="eyeShow" onChange={showPassword}>
                {pwValueVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </div>
          </div>

          <div className="group input">
            <label htmlFor="role">Profile* :</label>
            <select id="roleType" name="role" onChange={changeProfilValue} required>
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
              <label htmlFor="levelTeaching">Niveau d'enseignement* :</label>
              <select id="levelTeaching" name="levelTeaching" required>
                <option>Niveau d'enseignement</option>
                <option value="primaire">Primaire</option>
                <option value="college">Collège</option>
                <option value="lycee">Lycée</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="group input">
            {schoolErr && <p>Merci de renseigner le nom de l'établissement</p>}
              <label htmlFor="schoolName">Nom d'établissement* :</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                required
                placeholder="Nom d'établissement"
              />
            </div>

              {cityErr && <p>Merci de renseigner la ville de l'établissement</p>}
            <div className="group input" style={{ display: "flex" }}>
              <label htmlFor="schoolCity">
                Département de l'établissement* :
              </label>
              <input
                type="text"
                id="schoolCity"
                name="schoolCity"
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
            className="assoForm"
            style={{ display: profilChoice == "asso" ? "block" : "none" }}>
            <h2>Informations liées à l'association</h2>

            <div className="group input">
            {numSIRETErr && <p>Merci de renseigner les 14 chiffres composant votre N° SIERT</p>}
              <label htmlFor="siret">N° SIRET</label>
              <input
                type="text"
                id="siret"
                name="siret"
                value={numSIRET}
                onChange={(e) => setNumSIRET(e.target.value)}
                required
                placeholder="N° SIRET"
              />
            </div>

            <div className="group input">
            {adressErr && <p>Merci de renseigner l'adresse de l'établissement</p>}
              <label htmlFor="assoAdress">Adresse de l'association :</label>
              <input
                type="text"
                id="assoAdress"
                name="assoAdress"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                required
                placeholder="Adresse de l'association"
              />
            </div>
            <div className="group input">
            {zipCodeErr && <p>Merci de renseigner correctement le code postal</p>}
              <label htmlFor="assoZipcode">Code postal :</label>
              <input
                type="text"
                id="assoZipcode"
                name="assoZipcode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
                placeholder="Code postal"
              />
            </div>
            <div className="group input">
            {cityErr && <p>Merci de renseigner la ville de l'établissement</p>}
              <label htmlFor="assoCity">Commune :</label>
              <input
                type="text"
                id="assoCity"
                name="assoCity"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                placeholder="Commune"
              />
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
              {validForm && (
            <p className="validForm">Votre inscription est bien prise en compte ✅. Bienvenue dans l'équipe 🙂</p>)}
            <ReCAPTCHA
              sitekey="6Lc2sGkmAAAAAIlDYxj_zWGjOYnAw0dbOKWXqKL-"
              onChange={onChange}
            />
            <button type="submit" className="soumettre" onClick={validate}>
              Valider
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
