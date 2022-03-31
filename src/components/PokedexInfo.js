import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const PokedexInfo = () => {
   
    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState({})
    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemon(res.data))
    },[id])
    console.log(pokemon)
    return (
        <div className='information-pokemon'>
            <br />
            <div className="img-logo">
            <img className='img-pokemon-logo' src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png" alt="" />
            <br />
              <img className='img-pokemon' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
              <h4>{pokemon.name}</h4>
              <p> <strong>{pokemon.id} </strong></p>
              <div className="pokemon-info-subtitle">
              <p> <strong> {pokemon.weight} </strong><br /> weight </p>
              <p> <strong> {pokemon.height}</strong> <br /> height </p>
              </div>
              </div>
        
        <div className="type">
            <h4>Types</h4>
        {pokemon.types?.map(type => (
               <strong key={type.slot} >{ type.type.name} </strong>
               ))}
        </div>
        <div className="abilities">
        <h4>Abilities</h4>
        {pokemon.abilities?.map(ability => (
               <strong key={ability.slot} >{ ability.ability.name} </strong>
               ))}
        </div>
        <div className="stats-base">
            <h4>Stats base</h4> 
            <div className="stats-base-items">
               {pokemon.stats?.map(stat => (
               <p key={stat.stat.url} >{stat.stat?.name}: <strong> { stat.base_stat}</strong> </p>
               ))}
               </div>
        </div>
        <div className="movements">
            <h4>Movements</h4>
            <div className="movements-items">
            {pokemon.moves?.map(move => (
               <p key={move.move.url} >{move.move.name} </p>
               ))}
               </div>
        </div>
        <br />
        </div>
    );
};

export default PokedexInfo;