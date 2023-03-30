import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Pokedex extends Component {
  render() {
    const { pokemonList } = this.props;
    return (
        <div>
      <h1>Pokédex</h1>
      <ul>
        <li></li>
      </ul>
      </div> 
    );
  }
}

export default Pokedex