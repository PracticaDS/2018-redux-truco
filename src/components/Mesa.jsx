import React from 'react'
import { repeat } from 'ramda'

import Carta from './Carta'

import './Mesa.css'

export default function Mesa({ manos }) {
  const todasLasManos = manos
    .concat(repeat({ }, 3 - manos.length))
  return (
    <div className="mesa">
      {todasLasManos.map(mano => (
        <ManoJugada mano={mano}/>
      ))}
    </div>
  )
}

const ManoJugada = ({ mano }) => (
  <div className="manoJugada">
    {mano.ellos ? <Carta carta={mano.ellos} /> : <CartaPorJugar />}
    {mano.nosotros ? <Carta carta={mano.nosotros} /> : <CartaPorJugar />}
    <Tilde resultado={mano.resultado} />
  </div>
)

const CartaPorJugar = () => (
  <div className="carta porJugar">
    <div />
  </div>
)

const Tilde = ({ resultado }) => <div className={`tilde ${resultado || 'indefinido' }`} />