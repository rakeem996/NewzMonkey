import React, { Component } from 'react'
import Navbar from './Navbar'
import Newz from './Newz'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Newz />
      </div>
    )
  }
}
