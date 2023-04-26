import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import UseFetch from '../Hook/UseFetch';

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
      
      <PokemonCard name={activePokemon} />
    </div>
  );
}

export default Main;
