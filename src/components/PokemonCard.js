import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

 
    
  handleClick = (e) => {
    console.log(e.target.src)
    
    if (e.target.src == this.props.singlePokemon.sprites.front) {
      e.target.src = this.props.singlePokemon.sprites.back
    } else {
      e.target.src = this.props.singlePokemon.sprites.front
    }
  }
  
  render() {
    let hpVal = this.props.singlePokemon.stats.filter(stat =>  stat.name == "hp" )

    console.log(hpVal)

    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.props.singlePokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.singlePokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpVal[0].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
