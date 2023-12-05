import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import Loader from './Loader';

export default function PokemonList() {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {filteredPokemons.length ? (
            <>
              {allPokemons.map(pokemon => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map(pokemon => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
}
