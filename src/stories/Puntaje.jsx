import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Puntaje from '../components/Puntaje'

storiesOf('Puntaje', module)
  .add('nos 3, ellos 10', () =>
    <Puntaje puntaje={{ nosotros: 3, ellos: 11 }} />
  )
  .add('nos 0, ellos 1', () =>
    <Puntaje puntaje={{ nosotros: 0, ellos: 1 }} />
  )
  .add('nos 0, ellos 0', () =>
    <Puntaje puntaje={{ nosotros: 0, ellos: 0 }} />
  )