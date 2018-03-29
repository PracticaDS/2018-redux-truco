import React from 'react'
import { Turno } from '../model/constants'

export default class Oponente extends React.Component {

  simularJugada() {
    const { turno, cartas, jugarCarta } = this.props
    console.log('simularJugada', turno)
    if (turno === Turno.ELLOS) {
      setTimeout(() => {
        const carta = cartas.find(c => c.jugada === undefined)
        jugarCarta(carta)
      }, randomBetween(500, 3000))
    }
  }

  componentDidMount = this.simularJugada
  componentDidUpdate = this.simularJugada

  render() {
    return null
  }
}

const randomBetween = (from, to) => Math.floor(Math.random() * to) + from