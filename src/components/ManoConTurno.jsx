import React from 'react'

import './ManoConTurno.css'

const ManoConTurno = ({ actual, children }) => (
  <div className="manoConTurno">
    <div className={`turnoActual ${actual && "habilitado"}`} />
    {children}
  </div>
)

export default ManoConTurno