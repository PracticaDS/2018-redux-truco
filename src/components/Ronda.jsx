import React from 'react'

import Mano from './Mano.jsx'
import Mesa from './Mesa.jsx'

const noRonda = {
  cartas: { nosotros: [], ellos: [] },
  manos: []
}

const Ronda = ({ ronda: { cartas, manos } = noRonda }) => (
  <div>
    <Mano cartas={cartas.ellos} oponente />
    <Mesa manos={manos} />
    <Mano cartas={cartas.nosotros} />
  </div>
)
export default Ronda