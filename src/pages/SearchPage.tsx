import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useLocation } from 'react-router-dom';

export const SearchPage = () => {
  const location = useLocation();
  const { globalPokemons } = useContext(PokemonContext);


  const filteredPokemons = globalPokemons.filter(pokemon =>
    pokemon.name.includes(location.state.toLowerCase())
  );

 

  return (
    <div className='w-full'>
      <h2 className='ml-10 max-[540px]:mt-10'>Se han Encontrado {filteredPokemons.length} pokemon</h2>
    </div>
  );
};
