import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

    constructor() {
      super()
      this.state = {
        allPokemon: [],
        searchTerm: ""
      }
    }



    componentDidMount() {
      fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemon => this.setState({allPokemon: pokemon}))
    }

    getDisplayList = () => {
      if (this.state.searchTerm !== "") {
        return this.state.allPokemon.filter(pokemon => (pokemon.name.includes(this.state.searchTerm)))
      } else {
        return this.state.allPokemon
      }
    }

    handleSearch = (e) => {
      this.setState({
        searchTerm: e.target.value
      })
    }

  saveNewPokemon = (newPokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    }
    )
      .then(res => res.json())
      .then(newPk => this.setState({ allPokemon: [...this.state.allPokemon, newPk] })
)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newPokemon = {
      name: e.target.name.value,
      stats: [{
        name: "hp",
        value: parseInt(e.target.hp.value, 10)
      }],
      sprites: {
        front: e.target.frontUrl.value,
        back: e.target.backUrl.value
      }
    }
    e.target.reset()
    this.saveNewPokemon(newPokemon)
  }

  

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e) => this.handleSearch(e)} showNoResults={false} />
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <PokemonCollection thePokemons={this.getDisplayList()}/>
        <br />
        
      </div>
    )
  }
}

export default PokemonPage
