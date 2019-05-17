import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <div>
        <h1 align="center">Hello From Pokemon Collection</h1>
        <div className="pokemon-showcase">
          <Card.Group itemsPerRow={6}>
            {this.props.pokemon.map( pokemon => {
              return <PokemonCard pokemon={pokemon} />
            })}
          </Card.Group>
        </div>
      </div>
    )
  }
}

export default PokemonCollection
