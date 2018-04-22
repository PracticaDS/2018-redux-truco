import React from 'react'
import { ResultadoMano as Resultado } from '../model/constants'

import './ResultadoMano.css'

const ResultadoMano = ({ resultado }) => (
  <div className="resultadoManoPanel">
    <h2>Ronda terminada</h2>
    <div>{label[resultado]}</div>
  </div>
)

const label = {
  [Resultado.GANADOR]: 'Ganaste !',
  [Resultado.PERDEDOR]: 'Perdiste !',
  [Resultado.EMPATE]: 'Empate !',
}

export default ResultadoMano