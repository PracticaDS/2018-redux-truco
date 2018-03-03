import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Carta from '../components/Carta'

storiesOf('Carta', module)
  .add('3 de bastos', () =>
    <Carta carta={{ numero: 3, palo: 'bastos' }} />
  )
  .add('6 de oros', () =>
    <Carta carta={{ numero: 6, palo: 'oros' }} />
  )
  .add('9 de copas', () =>
    <Carta carta={{ numero: 9, palo: 'copas' }} />
  )
  .add('12 de espadas', () =>
    <Carta carta={{ numero: 12, palo: 'espadas' }} />
  )
  .add('seleccionable', () =>
    <Carta carta={{ numero: 3, palo: 'bastos' }} seleccionable />
  )