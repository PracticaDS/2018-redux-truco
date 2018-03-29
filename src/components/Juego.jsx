import React from 'react'

import Ronda from '../containers/Ronda'
import Puntaje from '../containers/Puntaje'
import Oponente from '../containers/Oponente'

import './Juego.css'

export default function Juego({ onIniciarJuego, onJugarCarta }) {
  return (
    <div className="juego">
      <Oponente />
      <div>
        <a href="#" onClick={onIniciarJuego}>Iniciar Juego</a>
      </div>
      <Ronda onJugarCarta={onJugarCarta} />
      <div>
        <Puntaje />
      </div>
    </div>
  )
}