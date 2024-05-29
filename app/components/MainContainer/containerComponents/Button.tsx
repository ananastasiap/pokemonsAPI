"use client";
import { useEffect } from "react";
import { Chip, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getPokemonList } from "@/app/api/getPokemonList";
import { setPokemonList } from "@/lib/pokemonsSlices/pokemonsSlice";

interface ButtonProps {
  onPokemonSelect: (name: string) => void;
}

export const Button: React.FC<ButtonProps> = ({ onPokemonSelect }) => {
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
    <Grid
      component="section"
      container
      sx={{ gap: "8px", maxWidth: "484px", marginTop: "129px" }}
    >
      {pokemonList.map((pokemon, id) => (
        <Chip
          component="button"
          label={pokemon.name}
          key={id}
          onClick={() => onPokemonSelect(pokemon.name)}
          sx={{
            height: "60px",
            padding: "20px 10px",
            fontSize: "20px",
            color: "#fff",
            background: "#1986EC",
            borderRadius: "44px",
            fontFamily: "'Raleway', sans-serif",
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
