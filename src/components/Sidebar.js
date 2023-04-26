import React, { useState } from 'react';

function Sidebar({ data, handleActivePokemon, handleUrl }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data.results);

  function handleSearch(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      setFilteredData(
        data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredData(data.results);
    }
  }

  return (
    <>
      <h2>Pokemon List</h2>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredData.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={handleActivePokemon}>{pokemon.name}</button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => handleUrl(data.previous)}>Previous</button>
        <button onClick={() => handleUrl(data.next)}>Next</button>
      </div>
    </>
  );
}

export default Sidebar;
