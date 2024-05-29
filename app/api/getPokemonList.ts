import axios, { AxiosError } from "axios";
import { POKEMON_API } from "./constants";

export const getPokemonList = async () => {
  try {
    const response = await axios.get(POKEMON_API, {
      params: {
        limit: 10,
      },
    });
    const pokemonList = response.data.results;
    return pokemonList;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch pokemons: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred!");
    }
  }
};
