import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    const {name, age} = this.props
    return (
      <div>
            <h1>The name of the Person is {name}</h1>
            <h2>The age of the Person is {age}</h2>
      </div>
    )
  }
}
