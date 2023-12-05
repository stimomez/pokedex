import { Link } from 'react-router-dom';
import { Pokemon } from '../interfaces';

interface CardPokemonProps {
  pokemon: Pokemon;
}

export const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  console.log(pokemon.types);

  return (
    <div>
      <Link to={`/pokemon/${pokemon.id}`}>jkgjdjgf</Link>
    </div>
  );
};


