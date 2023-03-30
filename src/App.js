import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';

class App extends React.Component {
  render() {
    return (
      <div>
      <h1>Exercise - Pokedex</h1>
      <Pokedex />
      </div>
    );
  }
}

export default App;
