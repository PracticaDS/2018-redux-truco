import React from 'react'
import { pipe, range, splitEvery } from 'ramda'

import './Puntaje.css'

export default function Puntaje({ puntaje: { nosotros, ellos } }) {
  const palitos = pipe(
    range(1),
    splitEvery(5)
  )(nosotros + 1)

  return (
    <div className="puntaje">
      <div>
        <div className="header nosotros">
          N
        </div>
        <div className="palitos nosotros">
          {palitos.map((p, i) => (<Cajita key={i} valor={p.length} />))}
        </div>
      </div>
      <div>
        <div className="header ellos">
          E
        </div>
      </div>
    </div>
  )
}

const Cajita = ({ valor }) => {
  return <span>{valor}</span>
}