import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import * from "debouncer"
import _ from 'lodash'
const pokeURL = `http://localhost:3000/pokemon/`

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon: [],
      query: ""
    }
  }
  
  componentDidMount() {
    fetch(pokeURL)
    .then(res => res.json())
    .then(pokemonData => this.setState({ pokemon: pokemonData }))
  }
  
  onSearchChange =(e)=> {
    this.setState({ query: e.target.value })
  }
  
  getQueryResults() {
    return this.state.pokemon.filter( pokemon => { 
      if (pokemon.name.toLowerCase().includes(this.state.query.toLowerCase()))
      return true
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(pokeURL, {
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method:"POST",
      body: JSON.stringify({ 
        name: e.target[0].value,
        stats: [{ value: e.target[1].value, name: "hp"}],
        sprites: { front: e.target[2].value, back: e.target[3].value }
      })
    })
    .then(response => response.json())
    .then(this.updatePokeList)
    e.target.reset()
  }
    
  updatePokeList = (pokemonData) => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemonData]
    })
  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChange} />
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <PokemonCollection pokemon={this.getQueryResults()}/>
      </div>
    )
  }
}

export default PokemonPage
