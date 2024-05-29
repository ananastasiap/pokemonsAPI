export interface Pokemon {
  name: string;
}
export interface PokemonState {
  pokemonList: Pokemon[];
}

export interface Sprites {
  front_default?: string;
  other?: {
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface PokemonItem {
  data: {
    name: string;
    sprites: Sprites;
    moves: [];
    id: number;
    height: number;
    stats: { base_stat: number }[];
  };
  isFetching: boolean;
}
