import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Ronda from '../components/Ronda'

storiesOf('Ronda', module)
  .add('con resultado de mano ganador', () =>
    <Ronda ronda={{
      resultado: 'ganador',
      cartas: { nosotros: [], ellos: [] },
      manos: []
    }} />
  )