import { createSlice } from "@reduxjs/toolkit";
import { PokemonState } from "./types";

export const initialState: PokemonState = {
  pokemonList: [],
};

export const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
  },
});

export const { setPokemonList } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
