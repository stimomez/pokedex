import { FilterBar } from '../components/FilterBar';
import PokemonList from '../components/PokemonList';

export const HomePage = () => {
  
  return (
    <div className="px-7 py-10">
      <PokemonList />
      <FilterBar />
    </div>
  );
};
