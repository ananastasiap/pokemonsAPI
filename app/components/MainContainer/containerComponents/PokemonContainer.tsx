"use client";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getPokemonData } from "@/app/api/getPokemonData";
import {
  setPokemonItem,
  setPokemonItemData,
} from "@/lib/pokemonsSlices/pokemonItemSlice";

export const PokemonContainer: React.FC<{ selectedPokemonName: string }> = ({
  selectedPokemonName,
}) => {
  const dispatch = useAppDispatch();
  const pokemonItem = useAppSelector((state) => state.pokemonContainer);

  useEffect(() => {
    if (selectedPokemonName !== null) {
      fetchPokemonItem(selectedPokemonName);
    }
  }, [selectedPokemonName]);

  const fetchPokemonItem = async (name: string) => {
    dispatch(setPokemonItem());
    try {
      const fetchedPokemonItemn = await getPokemonData(name);
      dispatch(setPokemonItemData(fetchedPokemonItemn));
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch a pokemon: ${error.message}`);
      } else {
        throw new Error("Unknown error occurred!");
      }
    }
  };

  return (
    <Grid
      container
      content="section"
      direction="column"
      sx={{
        maxWidth: "484px",
        gap: "40px",
        padding: "44px",
        color: "#A0A0A0",
        backgroundColor: "#000",
      }}
    >
      <Typography variant="h2" sx={{ textTransform: "capitalize" }}>
        {pokemonItem.data.name}
      </Typography>
      <Box
        component="img"
        src={pokemonItem.data.sprites.other?.["official-artwork"].front_default}
        alt="Pokemon image"
        loading="eager"
        sx={{ width: "150px", height: "auto" }}
      />
      <Box>
        <Typography variant="body1">
          Снялся в {pokemonItem.data.moves.length} сериях
        </Typography>
        <Typography variant="body1">id: {pokemonItem.data.id}</Typography>
        <Typography variant="body1">
          height: {pokemonItem.data.height}
        </Typography>
        <Typography variant="body1">
          attack:{" "}
          {pokemonItem.data.stats &&
            pokemonItem.data.stats[1] &&
            pokemonItem.data.stats[1].base_stat}
        </Typography>
      </Box>
    </Grid>
  );
};
