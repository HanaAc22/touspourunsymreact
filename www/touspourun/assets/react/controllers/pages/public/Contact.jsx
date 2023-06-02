import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "../../../../styles/contact.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { validEmail, validNameRgex, validMsgRgex } from "../../_utils/Regex";
import React, { useState } from "react";
const Contact1 = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgErr, setMsgErr] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [value, setValue] = useState("");

  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (validEmail.test(email)) {
      setEmailErr(false);
    }
    if (!validNameRgex.test(firstName)) {
      setFirstNameErr(true);
    }
    if (firstName == "" || validNameRgex.test(firstName)) {
      setFirstNameErr(false);
    }
    if (name == "" || !validNameRgex.test(name)) {
      setNameErr(true);
    }
    if (name != "" && validNameRgex.test(name)) {
      setNameErr(false);
    }
    if (msg == "" || !validMsgRgex.test(msg)) {
      setMsgErr(true);
    }
    if (msg != "" && validMsgRgex.test(msg)) {
      setMsgErr(false);
    }
    if (
      msg != "" &&
      validMsgRgex.test(msg) &&
      name != "" &&
      validNameRgex.test(name) &&
      (firstName == "" ||
        (validNameRgex.test(firstName) && validEmail.test(email)))
    ) {
      setValidForm(true);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Card className="main">
        <CardContent className="pres">
          <Typography variant="h1">Contactez nous</Typography>
          <Typography variant="body" components="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            explicabo eveniet autem eius eligendi animi sit sapiente minus
            beatae consectetur!
          </Typography>
          <Typography>
            <a href="/login"> Rejoignez nous !</a>
          </Typography>
        </CardContent>
        <CardContent className="formCont">
          <Typography variant="h2">Nous écrire</Typography>
          {nameErr && <p>Merci de renseigner correctement votre nom</p>}
          {firstNameErr && <p>Merci de renseigner correctement votre prénom</p>}
          {emailErr && <p>Votre e-mail est invalide</p>}
          {msgErr && <p>Merci de renseigner correctement votre message</p>}
          {validForm && (
            <p className="validForm">
              Votre message est bien envoyé ✅. Nous vous contacterons dès que
              possible 🙂
            </p>
          )}

          <form action="/contact" method="post">
            <Grid container spacing={1}>
              <Grid xs={12} sm={8} item>
                <RadioGroup
                  name="gender"
                  className="gender"
                  value={value}
                  onChange={handleChange}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="M."
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Mme"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Ne pas se prononcer"
                  />
                </RadioGroup>
              </Grid>
              <Grid xs={12} sm={8} item>
                <TextField
                  label="Nom"
                  placeholder="Entrez votre nom"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
              <Grid xs={12} sm={8} item>
                <TextField
                  label="Prénom"
                  placeholder="Entrez votre prénom"
                  variant="outlined"
                  name={firstName}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid xs={12} sm={8} item>
                <TextField
                  label="E-mail"
                  placeholder="Entrez votre e-mail"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>

              <Grid xs={12} sm={8} item>
                <TextField
                  label="Message"
                  placeholder="Entrez votre message"
                  multiline
                  rows={8}
                  variant="outlined"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  required
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="contain"
                  className="btn-env"
                  onClick={validate}>
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact1;
>>>>>>> main
