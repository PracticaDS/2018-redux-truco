import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Mano from '../components/Mano'

storiesOf('Mano', module)
  .add('3 oros, 2 bastos, 12 copas', () =>
    <Mano cartas={[
      { numero: 3, palo: 'oros' },
      { numero: 2, palo: 'bastos' },
      { numero: 12, palo: 'copas' }
    ]} />
  )
  .add('seleccionable', () =>
    <Mano 
      cartas={[
        { numero: 3, palo: 'oros' },
        { numero: 2, palo: 'bastos' },
        { numero: 12, palo: 'copas' }
      ]}
      seleccionable
    />
  )