import React from 'react'
import { Card } from 'semantic-ui-react'
import '../index.css'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = { picture: true }
  }

  changeFacing =()=> {
    this.setState({ picture: !this.state.picture })
  }

  render() {
    return (
      <Card className="pokemon-card">
        <div>
          <div className="image" onClick={this.changeFacing}>
          {this.state.picture ? 
            <img src={this.props.pokemon.sprites.front} alt="oh no!" /> 
            : <img src={this.props.pokemon.sprites.back}/>}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP: {this.props.pokemon.stats.map( stats => {
                if (stats.name === "hp") {
                  return stats.value
                }})}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
