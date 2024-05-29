"use client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button } from "./containerComponents/Button";
import { PokemonContainer } from "./containerComponents/PokemonContainer";
import { WelcomeContainer } from "./containerComponents/WelcomeContainer";
import { ThemeProvider, createTheme } from "@mui/material";
import { raleway } from "@/app/layout";

const theme = createTheme({
  typography: {
    fontFamily: [raleway, "sans-serif"].join(","),
  },
});

export const MainContainer: React.FC = () => {
  const [selectedPokemonName, setSelectedPokemonName] = useState<string | null>(
    null,
  );

  const handlePockemonSelect = (name: string) => {
    setSelectedPokemonName(name);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          maxWidth: "980px",
          margin: "0 auto",
        }}
      >
        <Button onPokemonSelect={handlePockemonSelect} />
        {selectedPokemonName !== null ? (
          <PokemonContainer selectedPokemonName={selectedPokemonName} />
        ) : (
          <WelcomeContainer />
        )}
      </Grid>
    </ThemeProvider>
  );
};
