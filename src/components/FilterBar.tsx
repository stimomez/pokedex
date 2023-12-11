import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export const FilterBar = () => {
  const { types, active, handleCheckbox, setActive } =
    useContext(PokemonContext);

  return (
    <div
      className={` w-48 bg-white text-center fixed top-20 bottom-0 duration-700  ${
        active ? 'left-0' : '-left-full'
      } `}
    >
      <span className="text-xl absolute left-16 top-8">Tipo</span>
      <span className="absolute top-5 right-3 text-lg cursor-pointer   hover:text-xl">
        <i onClick={() => setActive(false)} className="fa-solid fa-xmark "></i>
      </span>
     
      <div className="flex flex-col justify-between mt-7 py-10  h-full text-start pl-4">
        {types.map(type => (
          <div key={type.url} className="flex gap-2">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name={type.name}
              id={type.name}
            />
            <label htmlFor={type.name}>{type.name}</label>
          </div>
        ))}

      </div>
    </div>
  );
};
