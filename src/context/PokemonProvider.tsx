import axios from 'axios';
import { PokemonContext } from './PokemonContext';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';
import { Pokemon, PokemonType, Type } from '../interfaces';

interface props {
  children: JSX.Element | JSX.Element[];
}

export interface ReqResList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export const PokemonProvider = ({ children }: props) => {
  const URL = 'https://pokeapi.co/api/v2';

  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [globalPokemons, setGlobalPokemons] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [offset, setOffset] = useState(0);

  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);

  //useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  });

  useEffect(() => {
    // 50 pokemon a la API
    getAllPokemon();
  }, [offset]);

  useEffect(() => {
    getAllTypes();
    // getGlobalPokemons();
  }, []);

  const getAllTypes = async () => {
    try {
      const types = await axios<ReqResList>(`${URL}/type`);
      setTypes(types.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPokemon = async (limit = 50) => {
    const data = await axios.get<ReqResList>(
      `${URL}/pokemon?limit=${limit}&offset=${offset}`
    );

    const promises = data.data.results.map(async pokemon => {
      const data = await axios.get(pokemon.url);
      return data.data;
    });
    const results = await Promise.all(promises);

    setAllPokemons([...allPokemons, ...results]);
  };

  // llamar a todos los pokemones
  const getGlobalPokemons = async () => {
    try {
      const data = await axios.get<ReqResList>(
        `${URL}/pokemon?limit=10000&offset=0`
      );

      const promises = data.data.results.map(async pokemon => {
        const data = await axios.get(pokemon.url);
        return data.data;
      });
      const results = await Promise.all(promises);
      setGlobalPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // llamar por id
  const getPokemonById = async (id: number) => {
    try {
      const data = await axios.get(`${URL}/pokemon/${id}`);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Cargar mas
  const loadMore = () => {
    setOffset(offset + 50);
  };

  // //filtrar
  // const [typeSelected, setTypeSelected] = useState({
  //   grass: false,
  //   normal: false,
  //   fighting: false,
  //   flying: false,
  //   poison: false,
  //   ground: false,
  //   rock: false,
  //   bug: false,
  //   ghost: false,
  //   steel: false,
  //   fire: false,
  //   water: false,
  //   electric: false,
  //   psychic: false,
  //   ice: false,
  //   dragon: false,
  //   dark: false,
  //   fairy: false,
  //   unknow: false,
  //   shadow: false,
  // });
  // const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  // const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
  //   // getGlobalPokemons()
  //   setTypeSelected({ ...typeSelected, [e.target.name]: e.target.checked });

  //   if (e.target.checked) {
  //     const filteredResults = globalPokemons.filter(pokemon =>
  //       pokemon.types.map(type => type.type.name).includes(e.target.name)
  //     );

  //     setFilteredPokemons([...filteredPokemons, ...filteredResults]);
  //   } else {
  //     const filteredResults = filteredPokemons.filter(
  //       pokemon =>
  //         !pokemon.types.map(type => type.type.name).includes(e.target.name)
  //     );

  //     setFilteredPokemons([...filteredResults]);
  //   }
  // };

  //filtrar

  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  const handleCheckbox = async (e: ChangeEvent<HTMLInputElement>) => {
    // getGlobalPokemons()

    if (e.target.checked) {
      setLoading(true);
      const typeSelected: Result[] = types.filter(
        type => type.name === e.target.name
      );

      const data = await axios.get<PokemonType>(typeSelected[0].url);
      // console.log(data.data.pokemon);

      const promises = data.data.pokemon.map(async pokemon => {
        const data = await axios.get(pokemon.pokemon.url);
        return data.data;
      });
      const results = await Promise.all(promises);

      setFilteredPokemons([...filteredPokemons, ...results]);

      setLoading(false);
    } else {
      const filteredResults = filteredPokemons.filter(
        pokemon =>
          !pokemon.types.map(type => type.type.name).includes(e.target.name)
      );

      setFilteredPokemons([...filteredResults]);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        types,
        allPokemons,
        globalPokemons,
        filteredPokemons,
        getPokemonById,
        loadMore,
        loading,
        setLoading,
        active,
        setActive,
        handleCheckbox,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
