import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { validEmail } from "../../_utils/Regex";
import "../../../../styles/contact.css";

export default function Contact () {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
  };

  return (
    <div className="containerContact">
      <Card className="main">
        <CardContent className="pres">
          <Typography variant="h1">Contactez nous</Typography>
          <Typography variant="body" components="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            explicabo eveniet autem eius eligendi animi sit sapiente minus
            beatae consectetur!
          </Typography>
          <Typography>
            {" "}
            Rejoignez nous{" "}
            <a href="/authentification">lien d'authentification</a>{" "}
          </Typography>
        </CardContent>
        <CardContent className="formCont">
          <Typography variant="h2">Nous écrire</Typography>
          {emailErr && (
            <p
              style={{
                color: "red",
                fontWeight: "bold",
                letterSpacing: 3,
                textTransform: "uppercase",
              }}>
              Votre e-mail est invalide
            </p>
          )}
          <form action="#">
            <Grid container spacing={1}>
              <Grid xs={12} sm={8} item>
                <TextField
                  label="Nom"
                  placeholder="Entrez votre nom"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid xs={12} sm={8} item>
                <TextField
                  label="Prénom"
                  placeholder="Entrez votre prénom"
                  variant="outlined"
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
