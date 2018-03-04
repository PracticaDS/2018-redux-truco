import React from 'react'
import classNames from 'classnames'

import './Carta.css'

export default function Carta({ carta, onClick, jugada = false, oculta = false }) {
  return (
    <div 
      className={classNames('carta', { seleccionable: onClick, jugada, oculta })}
      {...onClick && { onClick: () => { onClick(carta) }}}
    >
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