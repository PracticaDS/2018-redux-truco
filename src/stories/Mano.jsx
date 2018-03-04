import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Palo } from '../model/constants'
import Mano from '../components/Mano'

storiesOf('Mano', module)
  .add('3 oros, 2 bastos, 12 copas', () =>
    <Mano cartas={[
      { numero: 3, palo: Palo.OROS },
      { numero: 2, palo: Palo.BASTOS },
      { numero: 12, palo: Palo.COPAS }
    ]} />
  )
  .add('seleccionable', () =>
    <Mano 
      cartas={[
        { numero: 3, palo: Palo.OROS },
        { numero: 2, palo: Palo.BASTOS },
        { numero: 12, palo: Palo.COPAS }
      ]}
      seleccionable
    />
  )
  .add('1 jugada', () =>
    <Mano 
      cartas={[
        { numero: 3, palo: Palo.OROS, jugada: true },
        { numero: 2, palo: Palo.BASTOS },
        { numero: 12, palo: Palo.COPAS }
      ]}
      seleccionable
    />
  )
  .add('de oponente', () =>
    <Mano 
      cartas={[
        { numero: 3, palo: Palo.OROS, jugada: true },
        { numero: 2, palo: Palo.BASTOS },
        { numero: 12, palo: Palo.COPAS }
      ]}
      oponente
    />
  )