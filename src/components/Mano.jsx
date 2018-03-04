import React from 'react'

import Carta from './Carta'
import CartaJugada from './CartaJugada'

import './Mano.css'

export default function Mano({ cartas, seleccionable }) {
  return (
    <div className="mano">
      {cartas.map(carta => 
        carta.jugada ? <CartaJugada /> : <Carta carta={carta} seleccionable />
      )}
    </div>
  )
}