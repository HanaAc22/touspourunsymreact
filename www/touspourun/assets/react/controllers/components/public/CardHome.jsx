import React from "react";
import { Grid, Typography, Link, Box, Card, CardMedia, CardContent} from "@mui/material";

export const CardHome = () => {
  return (
    <Box className="cardHome">
      <Typography variant="h2">Notre actualité</Typography>
      <Grid container spacing={3} justify="center" className="cards" margin={0}>
        <Grid item xs={12} sm={6} md={3} className="card">
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              image="https://img.freepik.com/photos-gratuite/vue-face-journee-education-table-bloc-notes_23-2148721270.jpg?w=996&t=st=1676837477~exp=1676838077~hmac=9fb55821c32c37e5850054f021619da1a4ea40f7f8edfb244bd35454762f8e32"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Liste des Cours
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                <br />
                <Link>Consulter</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="card">
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              image="https://img.freepik.com/photos-gratuite/vue-face-journee-education-table-bloc-notes_23-2148721270.jpg?w=996&t=st=1676837477~exp=1676838077~hmac=9fb55821c32c37e5850054f021619da1a4ea40f7f8edfb244bd35454762f8e32"
              alt="books"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Evènements Associatifs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                <br />
                <Link>Consulter</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="card">
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              image="https://img.freepik.com/photos-gratuite/vue-face-journee-education-table-bloc-notes_23-2148721270.jpg?w=996&t=st=1676837477~exp=1676838077~hmac=9fb55821c32c37e5850054f021619da1a4ea40f7f8edfb244bd35454762f8e32"
              alt="desk"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Derniers échanges
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                <br />
                <Link>Consulter</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
