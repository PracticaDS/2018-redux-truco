import React from 'react'

import Ronda from '../containers/Ronda'
import Puntaje from '../containers/Puntaje'

import './Juego.css'

export default function Juego({ onIniciarJuego }) {
  return (
    <div className="juego">
      <div>
        <a href="#" onClick={onIniciarJuego}>Iniciar Juego</a>
      </div>
      <Ronda />
      <div>
        <Puntaje />
      </div>
    </div>
  )
}