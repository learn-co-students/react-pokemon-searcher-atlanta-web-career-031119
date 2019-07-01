import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  handleCardFlip = ()=> {
    this.setState({
      status: !this.state.status
    })
  }

  state = {
    status: true
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleCardFlip}>
          <div className="image">
            <img alt="oh no!" src={this.state.status ? this.props.poke.sprites.front : this.props.poke.sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.stats.filter(stat => stat.name === 'hp')[0].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
