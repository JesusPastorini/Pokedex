import React from 'react';
import './App.css';
import Pokemon from './Pokemon';

class App extends React.Component {
  render() {
    return (
      <div>
      <h1>Exercise - Pokedex</h1>
      <Pokemon />
      </div>
    );
  }
}

export default App;
