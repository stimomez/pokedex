import { ChangeEvent, createContext } from 'react';
import { Pokemon } from '../interfaces';

interface PokemonContextType {
  allPokemons: Pokemon[];
  globalPokemons: Pokemon[];
  getPokemonById: (id: number) => Promise<Pokemon>;
  onInputChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  valueSearch: string;
  onResetForm: () => void;
  loadMore: () => void;
  active: boolean;
  setActive: (estado: boolean) => void;
  filteredPokemons: Pokemon[];
  loading: boolean;
  setLoading: (estado: boolean) => void;
  handleCheckbox: (e: ChangeEvent<HTMLInputElement>) => void;
}

const getPokemonById = async (id: number): Promise<Pokemon> => {
  return {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_abilities: [],
    past_types: [],
    species: undefined,
    sprites: undefined,
    stats: [],
    types: [],
    weight: 0,
  };
};
const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {};

const initialPokemonContext: PokemonContextType = {
  allPokemons: [],
  globalPokemons: [],
  getPokemonById: getPokemonById,
  onInputChange: onInputChange,
  valueSearch: '',
  onResetForm: () => {},
  loadMore: () => {},
  active: false,
  setActive: () => {},
  filteredPokemons: [],
  setLoading: () => {},
  loading: true,

  handleCheckbox: () => {},
};

export const PokemonContext = createContext<PokemonContextType>(
  initialPokemonContext
);
