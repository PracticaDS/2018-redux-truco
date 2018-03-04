import React from 'react'

import Carta from './Carta'
import CartaJugada from './CartaJugada'
import CartaOponente from './CartaOponente'

import './Mano.css'

export default function Mano({ cartas, seleccionable, oponente }) {
  const crearCarta = oponente ?
    carta => <CartaOponente jugada={carta.jugada}/>
    : carta => carta.jugada ? <CartaJugada /> : <Carta carta={carta} seleccionable />
  
  return (
    <div className="mano">
      {cartas.map(crearCarta)}
    </div>
  )
}