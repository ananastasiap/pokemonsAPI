import axios, { AxiosError } from "axios";
import { POKEMON_API } from "./constants";

export const getPokemonData = async (name: string) => {
  try {
    const response = await axios.get(`${POKEMON_API}/${name}`);
    const pokemonItem = response.data;
    return pokemonItem;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch pokemon data: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred!");
    }
  }
};
