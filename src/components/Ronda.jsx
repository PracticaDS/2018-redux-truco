import React from 'react'

import Mano from './Mano.jsx'
import Mesa from './Mesa.jsx'
import ManoConTurno from './ManoConTurno.jsx'
import ResultadoMano from './ResultadoMano.jsx'

import './Ronda.css'

const noRonda = {
  cartas: { nosotros: [], ellos: [] },
  manos: []
}

const Ronda = ({ onJugarCarta, ronda: { cartas, manos, resultado } = noRonda, nuestroTurno, turnoDeEllos }) => (
  <div className="ronda">
    <ManoConTurno actual={turnoDeEllos}>
      <Mano cartas={cartas.ellos} oponente />
    </ManoConTurno>

    <Mesa manos={manos} />

    <ManoConTurno actual={nuestroTurno}>
      <Mano cartas={cartas.nosotros} seleccionable={nuestroTurno} onClick={onJugarCarta} />
    </ManoConTurno>

    {resultado && <ResultadoMano resultado={resultado} />}
  </div>
)
export default Ronda