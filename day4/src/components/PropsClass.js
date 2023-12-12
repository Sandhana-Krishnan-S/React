import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <div>
          <h1>Hello My Name Is { this.props.Name }.</h1>
          <h1>Hello My Name Is { this.props.Class }.</h1>
      </div>
    )
  }
}
