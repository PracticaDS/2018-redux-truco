import React from 'react'

import Mano from './Mano.jsx'
import Mesa from './Mesa.jsx'
import ManoConTurno from './ManoConTurno.jsx'

import { Turno } from '../model/constants'

const noRonda = {
  cartas: { nosotros: [], ellos: [] },
  manos: []
}

const Ronda = ({ onJugarCarta, ronda: { cartas, manos, turno } = noRonda }) => (
  <div>
    <ManoConTurno actual={turno === Turno.ELLOS}>
      <Mano cartas={cartas.ellos} oponente />
    </ManoConTurno>

    <Mesa manos={manos} />

    <ManoConTurno actual={turno === Turno.NOSOTROS}>
      <Mano cartas={cartas.nosotros} onClick={onJugarCarta} />
    </ManoConTurno>
  </div>
)
export default Ronda