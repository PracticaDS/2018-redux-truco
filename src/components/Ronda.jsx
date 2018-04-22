import React from 'react'

import Mano from './Mano.jsx'
import Mesa from './Mesa.jsx'
import ManoConTurno from './ManoConTurno.jsx'
import ResultadoMano from './ResultadoMano.jsx'

import { Turno } from '../model/constants'

import './Ronda.css'

const noRonda = {
  cartas: { nosotros: [], ellos: [] },
  manos: []
}

const Ronda = ({ onJugarCarta, ronda: { cartas, manos, turno, resultado } = noRonda }) => (
  <div className="ronda">
    <ManoConTurno actual={turno === Turno.ELLOS && !resultado}>
      <Mano cartas={cartas.ellos} oponente />
    </ManoConTurno>

    <Mesa manos={manos} />

    <ManoConTurno actual={turno === Turno.NOSOTROS && !resultado}>
      <Mano cartas={cartas.nosotros} onClick={onJugarCarta} />
    </ManoConTurno>

    {resultado && <ResultadoMano resultado={resultado} />}
  </div>
)
export default Ronda