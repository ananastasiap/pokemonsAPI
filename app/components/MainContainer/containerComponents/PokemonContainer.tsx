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
      component="section"
      direction="column"
      sx={{
        maxWidth: "484px",
        gap: "40px",
        padding: "40px 44px 16px 44px",
        color: "#A0A0A0",
        backgroundColor: "#000",

        "@media (max-width: 1135px)": {
          marginTop: "5vh",
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textTransform: "capitalize",
          fontWeight: "700",
          fontSize: "48px",
        }}
      >
        {pokemonItem.data.name}
      </Typography>
      <Box
        component="img"
        width={150}
        height={150}
        src={pokemonItem.data.sprites.other?.["official-artwork"].front_default}
        alt="Pokemon image"
        loading="eager"
        sx={{ width: "150px", height: "auto", margin: "15px auto 0 auto" }}
      />
      <Box
        sx={{
          marginTop: "38px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "500",
            fontSize: "17px",
            lineHeight: "150%",
          }}
        >
          Снялся в {pokemonItem.data.moves.length} сериях
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "500",
            fontSize: "17px",
            lineHeight: "150%",
          }}
        >
          id: {pokemonItem.data.id}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "500",
            fontSize: "17px",
            lineHeight: "150%",
          }}
        >
          height: {pokemonItem.data.height}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "500",
            fontSize: "17px",
            lineHeight: "150%",
          }}
        >
          attack:{" "}
          {pokemonItem.data.stats &&
            pokemonItem.data.stats[1] &&
            pokemonItem.data.stats[1].base_stat}
        </Typography>
      </Box>
    </Grid>
  );
};
