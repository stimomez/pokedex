import { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

export const PokemonPage = () => {
  const { getPokemonById } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  console.log(pokemon);
  

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
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h4>pokemon</h4>
        </>
      )}
    </div>
  );
};
