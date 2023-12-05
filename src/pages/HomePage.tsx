import { useContext } from 'react';
import { FilterBar } from '../components/FilterBar';
import PokemonList from '../components/PokemonList';
import { PokemonContext } from '../context/PokemonContext';

export const HomePage = () => {
  const { loadMore, active, setActive } = useContext(PokemonContext);
  return (
    <div>
      <PokemonList />
      <FilterBar />
      <div>
        <button onClick={loadMore}>Cargar mas</button>
      </div>
    </div>
  );
};
