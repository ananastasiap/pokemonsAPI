"use client";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

export const WelcomeContainer: React.FC = () => {
  return (
    <Grid
      container
      component="section"
      justifyContent="center"
      alignItems="center"
      sx={{
        maxWidth: "484px",
        height: "500px",
        padding: "44px",
        backgroundColor: "#000",

        "@media (max-width: 1135px)": {
          marginTop: "5vh",
        },
      }}
    >
      <Box
        component="img"
        src="/pokemonLogo.webp"
        alt="Pokemon image"
        loading="eager"
        sx={{
          maxWidth: "400px",

          "@media (max-width: 400px)": {
            maxWidth: "260px",
          },
        }}
      />
    </Grid>
  );
};
