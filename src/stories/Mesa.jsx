import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Mesa from '../components/Mesa'

storiesOf('Mesa', module)
  .add('nada jugado', () =>
    <Mesa manos={[ ]} />
    )
  .add('1 mano jugada por nosotros nada mas', () =>
    <Mesa manos={[
      {
        nosotros: { numero: 3, palo: 'oros' },
        ellos: undefined,
      }
    ]} />
  )
  .add('1 mano jugada completa. Ganamos', () =>
    <Mesa manos={[
      {
        nosotros: { numero: 3, palo: 'oros' },
        ellos: { numero: 2, palo: 'bastos' },
        resultado: 'ganador'
      }
    ]} />
  )
  .add('1 mano jugada completa. Perdedor', () =>
    <Mesa manos={[
      {
        nosotros: { numero: 3, palo: 'oros' },
        ellos: { numero: 2, palo: 'bastos' },
        resultado: 'perdedor'
      }
    ]} />
  )
  .add('1 mano jugada completa. Empate', () =>
    <Mesa manos={[
      {
        nosotros: { numero: 3, palo: 'oros' },
        ellos: { numero: 2, palo: 'bastos' },
        resultado: 'empate'
      }
    ]} />
  )
  .add('2 manos jugadas completa', () =>
    <Mesa manos={[
      {
        nosotros: { numero: 3, palo: 'oros' },
        ellos: { numero: 2, palo: 'bastos' },
        resultado: 'ganador'
      },
      {
        nosotros: { numero: 1, palo: 'copas' },
        ellos: { numero: 6, palo: 'espadas' },
        resultado: 'ganador'
      }
    ]} />
  )
