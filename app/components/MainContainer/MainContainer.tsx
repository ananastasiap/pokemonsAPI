"use client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button } from "./containerComponents/Button";
import { PokemonContainer } from "./containerComponents/PokemonContainer";

export const MainContainer: React.FC = () => {
  const [selectedPokemonName, setSelectedPokemonName] = useState<string | null>(
    null,
  );

  const handlePockemonSelect = (id: string) => {
    setSelectedPokemonName(id);
  };

  return (
    <Grid
      container
      content="main"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        "@media (max-width: 1135px)": {
          justifyContent: "center",
        },
      }}
    >
      <Button onPokemonSelect={handlePockemonSelect} />
      {selectedPokemonName !== null && (
        <PokemonContainer selectedPokemonName={selectedPokemonName} />
      )}
    </Grid>
  );
};
