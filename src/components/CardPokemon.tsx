import { Link } from 'react-router-dom';
import { Pokemon } from '../interfaces';

interface CardPokemonProps {
  pokemon: Pokemon;
}

export const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  return (
    <Link
      className="flex bg-white flex-col  justify-between items-center shadow-xl rounded-lg  text-center  
        "
      to={`/pokemon/${pokemon.id}`}
    >
      <div className="w-full h-full mirror-effect hover:bg-slate-100 py-2">
        <img
          className="h-28 mx-auto"
          src={pokemon.sprites.other?.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className="border-t-2 border-slate-200 w-full flex flex-col justify-center items-center gap-1 py-2 hover:opacity-80">
        <h3 className="uppercase font-extrabold text-lg"> {pokemon.name}</h3>
        <div className="text-white flex gap-2  ">
          {pokemon.types.map(type => (
            <span
              key={type.type.name}
              className={`${type.type.name} px-3 rounded text-sm`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
