import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
//import _ from 'lodash'
let pokemonURL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  constructor(){
    super()

    this.state = {
      pokemon: [],
      searchString: ""
    }

    fetch(pokemonURL)
    .then(res=>res.json())
    .then(pokemonData=>this.setState({
      pokemon: pokemonData
    }))
  }

  handleSearch = (e) =>{
    this.setState({
      searchString: e.target.value
    })
  }

  filterArray = () =>{
    return this.state.pokemon.filter(pokemon=> {
      return pokemon.name.includes(this.state.searchString)
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.filterArray()} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
