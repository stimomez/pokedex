import axios from 'axios';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
    const userName = useSelector(state => state.userName)
    const navigate = useNavigate();
    const [ pokemons, setPokemons ] = useState([])
    const [ pokemonName, setPokemonName ] = useState("")
    const [ pokemonType, setPokemonType ] = useState([])

    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126')///
        .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setPokemonType(res.data.results))
        
    },[])
    
    const [ page, setPage ] = useState(1) 
    const itemsNumber = 9;
    const lastIndex = page * itemsNumber;
    const firstIndex = lastIndex - itemsNumber;
    const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(pokemons?.length/itemsNumber)
    const pagesNumbers = []
    for (let i = 0; i < totalPages; i++) {
        pagesNumbers.push(i+1)
        
    }
    
    

    
   
         const submit = e => {
                    e.preventDefault();
                    navigate(`/pokedex/${pokemonName}`)
                }
        const option = e => {
           
          axios.get(e.target.value)
          .then(res =>  setPokemons(res.data.pokemon))
         

        }
   
    return (
        <div className='top-side'>
            
            <h1 className='title'>Pokedex</h1>
            <p className='subtitle'>Welcome {userName}, here you can find your favorite pokemon</p>
           
            <form className="input-container" onSubmit={submit}>
                
                <input type="text"
                id='pokemon-search' 
                value={pokemonName}
                onChange={e => setPokemonName(e.target.value)}
                placeholder={'Search by name or id'}
                />
                <br />
                <button>Search</button>
            </form>
            <div className="select">
                
                <select onChange={option}>
                    <option value="">Select pokemon type</option>
                    {
                        
                        pokemonType.map(pt => (
                            <option key={pt.url} value={pt.url}>
                                {pt.name}
                            </option>

                        ))
                        
                         }
                </select>
              
            </div>
            <ul className='pokemon-info'>
                {
                    pokemonPaginated?.map( pokemon =>(
                        
                        <PokemonCard pokemonUrl={ pokemon.url ?  pokemon.url : pokemon?.pokemon.url}
                         key={ pokemon.url ?  pokemon.url : pokemon?.pokemon.url}
                        />
                        
                    ))
                       }

                    
            </ul>
            <div className='pagination'>
                <br />
                       <button onClick={() => setPage(page-1)} 
                       disabled={page <= 1}
                       ><i className="fa-solid fa-angle-left"></i>
                       </button>
                       {page} / {totalPages}
                       <button onClick={() => setPage(page+1)}
                       disabled= {page >= totalPages}
                       >
                           <i className="fa-solid fa-angle-right"></i>
                           </button>
                           <div>
                     
                           </div>
                    </div>
        </div>
        
    );
};

export default Pokedex;