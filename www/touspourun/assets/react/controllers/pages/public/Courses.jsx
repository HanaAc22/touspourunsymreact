import * as React from "react";
import "../../../../styles/blogCours.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "@mui/material";

export default function Courses() {
  const [data, setData] = useState([]);
  const apiUrl = "http://localhost:48000/api"

  useEffect(() => {
    axios
      .get(`${apiUrl}/courses`)
      .then((response) => {
        setData(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getImageUrl = (picture) => {
      return `/uploads/images/${picture}`
  };


  return (
    <div className="containerCourses">
      <Box sx={{ pt: 8, pb: 6 }}>
        <Container className="presCourses" maxWidth="md">
          <Typography variant="h1" align="center">
            Cours layout
          </Typography>
          <Typography variant="body2" className="subtitle">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
        </Container>

        <Container className="cardsCourses" sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid  item key={item.id} xs={12} sm={6} md={4} >
                <Card

                  className="cardCours"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  >
                    <img src={getImageUrl(item.picture)} alt={item.title} />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6">
                        {item.title}
                      </Typography>
                      {item.categories.map((category) => (
                          <Typography key={category.id}>{category.name}</Typography>
                      ))}
                      <Typography paragraph>{item.content}</Typography>
                      <Typography style={{ textAlign: "end" }}>
                        {new Date(item.createdAt).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </Typography>
                    </CardContent>
                    {/*<Link >Consulter </Link>*/}

                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </Box>
    </div>
  );
}
