import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemonList from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Exercise - Pokedex</h1>
        <Pokedex pokemonList={ pokemonList } />
      </div>
    );
  }
}

export default App;
