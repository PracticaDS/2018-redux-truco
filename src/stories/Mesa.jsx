import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Palo, ResultadoMano } from '../model/constants'
import Mesa from '../components/Mesa'

storiesOf('Mesa', module)
  .add('nada jugado', () =>
    <Mesa manos={[ ]} />
    )
  .add('1 mano jugada por nosotros nada mas', () =>
    <Mesa manos={[
      {
        nosotros: { numero: 3, palo: Palo.OROS },
        ellos: undefined,
      }
    ]} />
  )
  .add('1 mano jugada completa. Ganamos', () =>
    <Mesa manos={[
      {
        nosotros: { numero: 3, palo: Palo.OROS },
        ellos: { numero: 2, palo: Palo.BASTOS },
        resultado: ResultadoMano.GANADOR
      }
    ]} />
  )
  .add('1 mano jugada completa. Perdedor', () =>
    <Mesa manos={[
      {
        nosotros: { numero: 3, palo: Palo.OROS },
        ellos: { numero: 2, palo: Palo.BASTOS },
        resultado: ResultadoMano.PERDEDOR
      }
    ]} />
  )
  .add('1 mano jugada completa. Empate', () =>
    <Mesa manos={[
      {
        nosotros: { numero: 3, palo: Palo.OROS },
        ellos: { numero: 2, palo: Palo.BASTOS },
        resultado: ResultadoMano.EMPATE
      }
    ]} />
  )
  .add('2 manos jugadas completa', () =>
    <Mesa manos={[
      {
        nosotros: { numero: 3, palo: Palo.OROS },
        ellos: { numero: 2, palo: Palo.BASTOS },
        resultado: ResultadoMano.GANADOR
      },
      {
        nosotros: { numero: 1, palo: Palo.COPAS },
        ellos: { numero: 6, palo: Palo.ESPADAS },
        resultado: ResultadoMano.GANADOR
      }
    ]} />
  )
