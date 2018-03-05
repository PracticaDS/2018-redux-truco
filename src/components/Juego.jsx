import React from 'react'

import Mano from './Mano'
import Mesa from './Mesa'
import Puntaje from './Puntaje'

import { Palo, ResultadoMano } from '../model/constants'

import './Juego.css'

export default function Juego({ onIniciarJuego }) {
  const manos = [
    {
      nosotros: { numero: 3, palo: Palo.OROS },
      ellos: { numero: 2, palo: Palo.BASTOS },
      resultado: ResultadoMano.GANADOR
    },
    {
      nosotros: { numero: 1, palo: Palo.COPAS },
      ellos: { numero: 6, palo: Palo.ESPADAS },
      resultado: ResultadoMano.GANADOR
    }
  ]
  const cartasEllos = [
    { numero: 3, palo: Palo.OROS, jugada: true },
    { numero: 2, palo: Palo.BASTOS },
    { numero: 12, palo: Palo.COPAS }
  ]
  const cartasNosotros = [
    { numero: 3, palo: Palo.OROS, jugada: true },
    { numero: 2, palo: Palo.BASTOS },
    { numero: 12, palo: Palo.COPAS }
  ]
  const puntaje = { nosotros: 3, ellos: 11 }

  return (
    <div className="juego">
      <div>
        <a href="#" onClick={onIniciarJuego}>Iniciar Juego</a>
      </div>
      <div>
        <Mano cartas={cartasEllos} oponente />
        <Mesa manos={manos} />
        <Mano cartas={cartasNosotros} />
      </div>
      <div>
        <Puntaje puntaje={puntaje} />
      </div>
    </div>
  )
}