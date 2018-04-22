import React from 'react'
import { Turno } from '../model/constants'

export default class Oponente extends React.Component {

  simularJugada() {
    const { resultado, turno, cartas, jugarCarta } = this.props
    if (!resultado && turno === Turno.ELLOS) {
      // TODO: mover esto a un action
      setTimeout(() => {
        const carta = cartas.find(c => c.jugada === undefined)
        if (carta) {
          jugarCarta(carta)
        }
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