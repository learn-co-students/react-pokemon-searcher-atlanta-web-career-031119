import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      id: this.props.data.id,
      name: this.props.data.name,
      hp: this.props.data.stats.filter(obj=>obj.name==="hp")[0].value,
      frontImg: this.props.data.sprites.front,
      backImg: this.props.data.sprites.back,
      domImg: this.props.data.sprites.front,
      bool: true,
    }
  }

  changeImg = () => {
    if (this.state.bool === true){
      this.setState({
        ...this.state,
        domImg: this.state.backImg,
        bool: false
      })
    } else {
      this.setState({
        ...this.state,
        domImg: this.state.frontImg,
        bool: true
      })
    }
  }

  render() {
      return (
        <Card onClick={this.changeImg}>
          <div>
            <div className="image">
              <img alt="" src={this.state.domImg}/>
            </div>
            <div className="content">
              <div className="header">{this.state.name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {this.state.hp}
              </span>
            </div>
          </div>
        </Card>
      )
  }
}

export default PokemonCard
