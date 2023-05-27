import React from "react";
import { Grid, Typography, Button, Box, Link } from "@mui/material";

export const WhoWeAre = () => {
  return (
    <Box className="hwa">
      <Grid container spacing={6} className="gridContainer">
        <Grid item xs={12} md={7}>
          <Typography variant="h1" fontWeight={700} className="title">
            Some random quote
          </Typography>
          <Typography variant="body2" className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the
          </Typography>
          {/* <Button variant="contained" className="customButton">
            GET TO KNOW US
          </Button> */}
          <Link href="#" variant="">GET TO KNOW US</Link>
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src="https://img.freepik.com/photos-premium/livres-scolaires-papeterie-bois-fond-tableau-ecrit-formules-equations-mathematiques_255766-11653.jpg"
            alt="My Team"
            className="largeImage"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
