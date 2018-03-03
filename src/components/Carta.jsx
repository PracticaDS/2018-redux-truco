import React from 'react'

import './Carta.css'

export default function Carta({ carta, seleccionable, jugada = false }) {
  return (
    <div className={`carta ${seleccionable ? 'seleccionable' : '' } ${jugada ? 'jugada' : ''}`}>
      <div>
        <div className="carta-numero-arriba">{carta.numero}</div>
        <div className="carta-palo">
          <div className={`logo-palo ${carta.palo}`} />
        </div>
        <div className="carta-numero-abajo">{carta.numero}</div>
      </div>
    </div>
  )
}