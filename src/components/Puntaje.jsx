import React from 'react'
import { pipe, range, splitEvery, max, map, length, repeat } from 'ramda'

import './Puntaje.css'

export default function Puntaje({ puntaje: { nosotros, ellos } }) {
  const slots = Math.ceil(max(nosotros, ellos) / 5)
  const palitos = pipe(
    range(1),
    splitEvery(5),
    map(length),
    groups => groups.concat(repeat(0, slots - groups.length))
  )

  return (
    <div className="puntaje">
      <ColumnaPuntaje titulo="N" palitos={palitos(nosotros + 1)} estilo="nosotros" />
      <ColumnaPuntaje titulo="E" palitos={palitos(ellos + 1)} estilo="ellos" />
    </div>
  )
}

const ColumnaPuntaje = ({ titulo, palitos, estilo }) => (
  <div>
    <div className={`header ${estilo}`}>
      {titulo}
    </div>
    <div className={`palitos ${estilo}`}>
      {palitos.map((p, i) => (<Cajita key={i} valor={p} />))}
    </div>
  </div>
)

const Cajita = ({ valor }) => <div className="cajita">{valor}</div>