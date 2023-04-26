import React from 'react';
import UseFetch from '../Hook/UseFetch';

function PokemonCard({ name }) {
  const [pokemonData, isLoading] = UseFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (isLoading || !pokemonData) return <p>Loading...</p>;

  return (
    <div className="pokemon-card">
      <h1 className="heading">{name.toUpperCase()}</h1>
      <div className="pokemon-card2">
        <div className="pokemon-card-img">
          <img width="400" src={pokemonData.sprites.other.home.front_default} alt="" />
        </div>
        <div className="pokemon-data">
          <div>
            <h2>Stats:</h2>
            {pokemonData.stats.map((stat) => (
              <p key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>
          <div>
            <h2>Abilities:</h2>
            {pokemonData.abilities.map((ab) => (
              <p key={ab.ability.name}>{ab.ability.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
