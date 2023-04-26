import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PokemonCard from './PokemonCard';
import UseFetch from '../Hook/UseFetch';
import './Main.css'



function Main() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [activePokemon, setActivePokemon] = useState('bulbasaur');
  const [pokemonList, isLoading] = UseFetch(url);

  function handleActivePokemon(e) {
    setActivePokemon(e.target.innerText);
  }

  function handleUrl(url) {
    setUrl(url);
  }

  return (
    <div className="container">
    
      <div className="sidebar">
        {!isLoading && pokemonList ? (
          <Sidebar
            data={pokemonList}
            handleActivePokemon={handleActivePokemon}
            handleUrl={handleUrl}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <PokemonCard name={activePokemon} />
    </div>
  );
}

export default Main;
