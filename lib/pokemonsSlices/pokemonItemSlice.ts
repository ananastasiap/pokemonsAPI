import { createSlice } from "@reduxjs/toolkit";
import { PokemonItem } from "./types";

export const initialState: PokemonItem = {
  data: {
    name: "",
    sprites: {
      front_default: "",
      other: {
        "official-artwork": {
          front_default: "",
        },
      },
    },
    moves: [],
    id: 0,
    height: 0,
    stats: [{ base_stat: 0 }],
  },
  isFetching: false,
};

export const pokemonItemSlice = createSlice({
  name: "pokemonItem",
  initialState,
  reducers: {
    setPokemonItem: (state) => {
      state.isFetching = true;
    },
    setPokemonItemData: (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
    },
  },
});

export const { setPokemonItem, setPokemonItemData } = pokemonItemSlice.actions;

export default pokemonItemSlice.reducer;
