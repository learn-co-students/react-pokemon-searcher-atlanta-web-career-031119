import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    pokemon_search: []
  }

  createPokemon = (e, pokemon) => {
    e.preventDefault()
    let poke = pokemon

    return fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: poke.name,
        stats: [{
          name: 'hp',
          value: poke.hp
        }],
        sprites: {
          front: poke.frontUrl,
          back: poke.backUrl
        }
      })}).then(res => res.json())
      .then(poke => this.setState({pokemon: [...this.state.pokemon, poke]}))
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemonData => this.setState({pokemon: pokemonData, pokemon_search: pokemonData}))
  }

  handleSearch = (e, { value })=>{
    value ? this.setState({pokemon_search: this.state.pokemon.filter(poke => poke.name.startsWith(value))}) : this.setState({pokemon_search: this.state.pokemon})
  }

  render() {
    console.log('state', this.state)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon_search} />
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
