import React from 'react'
import classNames from 'classnames'
import './Carta.css'

export default function CartaOponente({ jugada = false }) {
  return (
    <div className={classNames('carta', 'oponente', { jugada })}>
      <div />
    </div>
  )
}