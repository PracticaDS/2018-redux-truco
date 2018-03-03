import React from 'react'
import { pipe, range, splitEvery, max, map } from 'ramda'

import './Puntaje.css'

export default function Puntaje({ puntaje: { nosotros, ellos } }) {
  const slots = max(nosotros, ellos) / 5
  const palitos = pipe(
    range(1),
    splitEvery(5),
    map(l => l.length),
    groups => groups.concat(range(0, slots - groups.length).map(() => 0))
  )

  const palitosNos = palitos(nosotros + 1)
  const palitosEllos = palitos(ellos + 1)

  return (
    <div className="puntaje">
      <div>
        <div className="header nosotros">
          N
        </div>
        <div className="palitos nosotros">
          {palitosNos.map((p, i) => (<Cajita key={i} valor={p} />))}
        </div>
      </div>
      <div>
      <div className="header ellos">
          E
        </div>
        <div className="palitos ellos">
          {palitosEllos.map((p, i) => (<Cajita key={i} valor={p} />))}
        </div>
      </div>
    </div>
  )
}

const Cajita = ({ valor }) => <div>{valor}</div>