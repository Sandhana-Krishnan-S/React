import React, { Component } from 'react'

var val = 0;
export default class StateClass extends Component {
    state = {
        count: val,
    }
    handleClick = () => {
        this.setState({
            count: (val > 20) ? val = 0 : val++,
        });
    }
  render() {
    return (
      <div>
        <h2>I am a State My Value Will increment : {this.state.count}</h2>
        <button onClick={this.handleClick} >Incrementer</button>
      </div>
    )
  }
}
