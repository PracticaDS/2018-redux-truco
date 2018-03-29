import React from 'react'

import Mano from './Mano'
import Mesa from './Mesa'
import Puntaje from '../containers/Puntaje'

import { Palo, ResultadoMano } from '../model/constants'

import './Juego.css'

const noRonda = {
  cartas: { nosotros: [], ellos: [] },
  manos: []
}

export default function Juego({ onIniciarJuego, ronda: { cartas, manos } = noRonda }) {
  return (
    <div className="juego">
      <div>
        <a href="#" onClick={onIniciarJuego}>Iniciar Juego</a>
      </div>
      <div>
        <Mano cartas={cartas.ellos} oponente />
        <Mesa manos={manos} />
        <Mano cartas={cartas.nosotros} />
      </div>
      <div>
        <Puntaje />
      </div>
    </div>
  )
}