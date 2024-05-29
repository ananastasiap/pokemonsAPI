"use client";
import { useEffect } from "react";
import { Chip, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getPokemonList } from "@/app/api/getPokemonList";
import { setPokemonList } from "@/lib/pokemonsSlices/pokemonsSlice";

export const Button: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemonList = useAppSelector((state) => state.mainScreen.pokemonList);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const fetchedPokemonList = await getPokemonList();
      dispatch(setPokemonList(fetchedPokemonList));
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch pokemons: ${error.message}`);
      } else {
        throw new Error("Unknown error occurred!");
      }
    }
  };

  return (
    <Grid component="section" container sx={{ gap: "8px", maxWidth: "450px" }}>
      {pokemonList.map((pokemon, id) => (
        <Chip
          component="button"
          label={pokemon.name}
          key={id}
          sx={{
            color: "white",
            background: "#1986EC",
            fontSize: "20px",
            height: "60px",
            padding: "20px 10px",
            borderRadius: "44px",
            ":hover": {
              background: "#4fa2ef",
            },
            ":active": {
              background: "#4fa2ef",
            },
          }}
        />
      ))}
    </Grid>
  );
};
