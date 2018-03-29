import React, { Component } from 'react'
import './App.css'

import Juego from './containers/Juego'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Juego />
        </div>
      </div>
    )
  }
}
