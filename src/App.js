import React, { Component } from 'react'
import './App.css'

import Juego from './containers/Juego'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Redruco</h1>
        </header>
        <div className="App-intro">
          <Juego />
        </div>
      </div>
    )
  }
}
