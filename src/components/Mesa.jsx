import React from 'react'
import { repeat } from 'ramda'

import Carta from './Carta'

import './Mesa.css'

export default function Mesa({ manos }) {
  const todasLasManos = manos
    .concat(repeat({ }, 3 - manos.length))

  return (
    <div className="mesa">
      {todasLasManos.map((mano, i) => (
        <ManoJugada key={i} mano={mano}/>
      ))}
    </div>
  )
}

const ManoJugada = ({ mano }) => (
  <div className="manoJugada">
    <CartaOEspacio para={mano.ellos} />
    <CartaOEspacio para={mano.nosotros} />
    <Tilde resultado={mano.resultado} />
  </div>
)

const CartaOEspacio = ({ para }) => (para ? <Carta carta={para} /> : <CartaPorJugar />)

const CartaPorJugar = () => <div className="carta porJugar"><div /></div>

const Tilde = ({ resultado }) => <div className={`tilde ${resultado || 'indefinido' }`} />