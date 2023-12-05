import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useLocation } from 'react-router-dom';

export const SearchPage = () => {
  const location = useLocation();
  const { globalPokemons } = useContext(PokemonContext);

  console.log(location);

  const filteredPokemons = globalPokemons.filter(pokemon =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  console.log(filteredPokemons);

  return (
    <div>
      <h2>se han Encontrado {filteredPokemons.length} pokemon</h2>
    </div>
  );
};
