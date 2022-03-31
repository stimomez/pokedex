import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {
    const [ pokemon, setPokemon ] = useState({})
    useEffect(()=>{
        axios.get(pokemonUrl)
        .then(res=>setPokemon(res.data))
    },[pokemonUrl])
    //console.log(pokemon)
    console.log(pokemon.types?.[0].type.name)
    return (
        <div className={`card ${pokemon.types?.[0].type.name} `}>
            <li key={pokemon.id }>
                <Link to={`/pokedex/${pokemon.id}`}> 
               
                <h2>{pokemon.name}</h2>
               
                {pokemon.types?.map(type => (
                   
                    <strong key={type.slot} >{ type.type.name} - </strong>
                    
                ))}
                <p>Height: <strong>{pokemon.height} </strong> </p>
                <b>weight: <strong>{pokemon.weight} </strong></b>
                <br />
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                </Link>
                
            </li>
        </div>
    );
};

export default PokemonCard;