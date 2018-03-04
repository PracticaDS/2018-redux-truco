import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Juego from '../components/Juego'

storiesOf('Juego', module)
  .add('Por ahora uno solo', () =>
    <Juego />
  )