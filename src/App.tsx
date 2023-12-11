import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { PokemonPage } from './pages/PokemonPage';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { PokemonProvider } from './context/PokemonProvider';

function App() {
  return (
    <div className="pt-24 ">
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="pokemon/:id" element={<PokemonPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PokemonProvider>
    </div>
  );
}

export default App;
