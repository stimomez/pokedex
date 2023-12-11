import { useContext } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const location = useLocation();

  const navigate = useNavigate();
  const params = useParams();

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <header
        style={{ background: '#f7f3f3' }}
        // // className="border z-40 fixed top-0 w-full flex justify-between p-3 items-center h-20 max-[540px]:justify-center max-[540px]:h-32 max-[540px]:border-none  "
        className="border z-40 fixed top-0 w-full flex justify-center p-3 items-center h-24   max-[540px]:border-none  "
      >
        <Link to="/" className="h-full">
          <img
            className="h-full "
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Logo Pokedex"
          />
        </Link>

        <form
          className=" hidden  gap-2 max-[540px]:flex-col max-[540px]:gap-1 max-[540px]:w-5/6 max-[540px]:"
          onSubmit={onSearchSubmit}
        >
          <div className="relative w-full">
            <input
              className="p-3 w-full placeholder:pl-6 border placeholder:text-slate-400 rounded-2xl outline-none bg-transparent max-[360px]:placeholder:text-xs"
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Nombre de pokemon"
            />
            <span className="absolute left-4 text-lg top-3 text-slate-400 ">
              {!valueSearch && <i className="fa-solid fa-magnifying-glass"></i>}
            </span>
          </div>

          <div className="text-center">
            {params.id ||
              (location.pathname === '/search' && (
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className=" border rounded-2xl mr-1  px-3 bg-transparent text-slate-500 w-20 mx-auto max-[540px]:h-10 min-[540px]:hidden"
                >
                  Inicio
                </button>
              ))}
            <button
              disabled={!valueSearch.trim()}
              className="border rounded-2xl px-3 bg-green-600 h-full text-white w-20 mx-auto max-[540px]:h-10"
            >
              Buscar
            </button>
          </div>
        </form>
      </header>

      <Outlet />
    </>
  );
};
