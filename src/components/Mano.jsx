import React from 'react'

import Carta from './Carta'
import CartaJugada from './CartaJugada'
import CartaOponente from './CartaOponente'

import './Mano.css'

export default function Mano({ cartas, seleccionable, oponente, onClick }) {
  const crearCarta = oponente ?
    (carta, i) => <CartaOponente key={i} jugada={carta.jugada} />
    : (carta, i) => 
      carta.jugada ? 
        <CartaJugada key={i} /> :
        <Carta key={i} carta={carta} jugada={carta.jugada} seleccionable onClick={onClick} />
  
  return (
    <div className="mano">
      {cartas.map(crearCarta)}
    </div>
  )
}