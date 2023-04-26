import React from 'react'
import PokemonCard from './components/PokemonCard'
import Main from './components/Main'
import logo from './poke.png'

const App = () => {
  return (
    <div className=''>
    <img src={logo} height='80' alt="logo" className="logo"/>
        <Main/>
    </div>
  )
}

export default App