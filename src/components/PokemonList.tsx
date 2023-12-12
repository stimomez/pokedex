import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';

import filterIcon from '../assets/filtrar.png';
import { Loader } from './Loader';

export default function PokemonList() {
  const { loadMore, allPokemons, loading, filteredPokemons, setActive } =
    useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="">
          <div className="flex items-center gap-1 p-2">
            <img
              onClick={() => setActive(true)}
              className="w-6 cursor-pointer"
              src={filterIcon}
              alt=""
            />
            <span className="cursor-pointer">Filtrar</span>
          </div>

          {filteredPokemons.length ? (
            <div className="grid grid-cols-4 gap-4  max-[800px]:grid-cols-3  max-[600px]:grid-cols-2  max-[400px]:grid-cols-1">
              {filteredPokemons.map((pokemon, i) => (
                <CardPokemon pokemon={pokemon} key={i} />
              ))}
            </div>
          ) : (
            <>
              {allPokemons.length ? (
                <>
                  <div className="grid grid-cols-4 gap-4  max-[800px]:grid-cols-3  max-[600px]:grid-cols-2  max-[400px]:grid-cols-1">
                    {allPokemons.map((pokemon, i) => (
                      <CardPokemon pokemon={pokemon} key={i} />
                    ))}
                  </div>
                  <div className="w-full text-center mt-4">
                    <button
                      className="capitalize border py-1 px-4 bg-yellow-300 text-blue-900 rounded-xl text-xs  hover:border hover:border-blue-500 "
                      onClick={loadMore}
                    >
                      cargar mas
                    </button>
                  </div>
                </>
              ) : (
                <Loader />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
