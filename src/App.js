import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import data from './data.js';

// Dica: Você pode armazenar no estado do componente pai da aplicação o pokemon
// sobre o qual está iterando no momento e os filtros aplicados sobre a lista.

class App extends React.Component {
  constructor() {
    super();
    this.eventShowPokemon = this.eventShowPokemon.bind(this);
    this.state = {
      indice: 0,
      pokemon: [data[0]],
    };
  }

  eventShowPokemon() {
    this.setState((previousState, _props) => ({
      indice: previousState.indice + 1,
      pokemon: this.resetPokedex(previousState),
    }));
  }

  resetPokedex(previousState) {
    if (previousState.indice === 8) {
      previousState.indice = 0;
    }
    return [data[previousState.indice + 1]];
  }

  render() {
    console.log(this);
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <button onClick={this.eventShowPokemon}>Próximo pokemon</button>
        <Pokedex pokemons={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
