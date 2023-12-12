import { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useParams } from 'react-router-dom';
import { Pokemon } from '../interfaces';
import { PokemonStats } from '../components/PokemonStats';
import { Loader } from '../components/Loader';

export const PokemonPage = () => {
  const { getPokemonById } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>({
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
    species: undefined!,
    sprites: undefined!,
    stats: [],
    types: [],
    weight: 0,
  });

  const { id } = useParams();
  const pokemonById = async (id: number) => {
    try {
      const data = await getPokemonById(id);
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pokemonById(Number(id));
  }, [id]);

  return (
    <div className="text-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" flex flex-row-reverse justify-center items-center mt-5  max-[670px]:flex-col ">
            {/* <span className="number-pokemon">#{pokemon.id}</span> */}
            <div className="max-[700px]:w-60">
              <img
                src={pokemon.sprites.other?.dream_world.front_default || ''}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>

            <div className=" flex flex-col  w-1/2 max-[610px]:w-full max-[610px]:items-center">
              <i className="text-5xl font-extrabold uppercase text-start max-[450px]:text-4xl">
                {pokemon.name}
              </i>
              <div className="flex gap-1 justify-start ml-4">
                {pokemon.types.map(type => (
                  <span
                    key={type.type.name}
                    className={`${type.type.name}  text-white px-2 rounded text-base`}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className=" flex justify-around mt-2">
                <div className="group-info">
                  <p className="font-bold">Altura</p>
                  <span>{pokemon.height}</span>
                </div>
                <div className="group-info">
                  <p className="font-bold">Peso</p>
                  <span>{pokemon.weight}KG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[30%_70%] items-center p-10 max-[700px]:grid-cols-1 max-[400px]:px-3">
            <h1 className="font-bold text-2xl">Estadísticas</h1>
            <div className=" p-4 text-start flex flex-col gap-6 max-[700px]:px-0">
              <PokemonStats
                statName={'HP'}
                baseStat={pokemon.stats[0].base_stat}
              />
              <PokemonStats
                statName={' Attack'}
                baseStat={pokemon.stats[1].base_stat}
              />
              <PokemonStats
                statName={'Defense'}
                baseStat={pokemon.stats[2].base_stat}
              />
              <PokemonStats
                statName={'Special Attack'}
                baseStat={pokemon.stats[3].base_stat}
              />
              <PokemonStats
                statName={' Special Defense'}
                baseStat={pokemon.stats[4].base_stat}
              />
              <PokemonStats
                statName={' Speed'}
                baseStat={pokemon.stats[5].base_stat}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
