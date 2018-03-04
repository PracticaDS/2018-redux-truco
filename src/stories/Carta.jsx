import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Palo } from '../model/constants'
import Carta from '../components/Carta'
import CartaJugada from '../components/CartaJugada'

storiesOf('Carta', module)
  .add('3 de bastos', () =>
    <Carta carta={{ numero: 3, palo: Palo.BASTOS }} />
  )
  .add('6 de oros', () =>
    <Carta carta={{ numero: 6, palo: Palo.OROS }} />
  )
  .add('9 de copas', () =>
    <Carta carta={{ numero: 9, palo: Palo.COPAS }} />
  )
  .add('12 de espadas', () =>
    <Carta carta={{ numero: 12, palo: Palo.ESPADAS }} />
  )
  .add('seleccionable', () =>
    <Carta carta={{ numero: 3, palo: Palo.BASTOS }} seleccionable />
  )
  .add('CartaJugada', () =>
    <CartaJugada />
  )