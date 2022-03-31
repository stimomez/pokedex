import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Access from './components/Access';
import Pokedex from './components/Pokedex';
import PokedexInfo from './components/PokedexInfo';
import ProtectedRoutes from './components/ProtectedRoutes ';

function App() {

  return (
   
      <HashRouter>
         <div className="App">
      <Routes>
        <Route path='/' element={<Access/>}/>
        <Route element={<ProtectedRoutes/>}>
         <Route path='/pokedex' element={<Pokedex/>}/>
         <Route path='/pokedex/:id' element={<PokedexInfo/>}/>
        </Route>
        <Route path='/*' element={<Access/>}/>
        
        </Routes> 
        </div>
      </HashRouter>
     
   
  );
}

export default App;
