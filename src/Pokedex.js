import React from 'react';
import PropTypes, { object } from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map((element) => (
          <Pokemon key={element.id} data={element} />
        ))}
      </div>
    );
  }
}

Pokedex.propTypes = { pokemons: PropTypes.arrayOf(object).isRequired };

export default Pokedex;
