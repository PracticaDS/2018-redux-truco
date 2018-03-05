import { juego } from './juego.js'
import { iniciarJuego } from '../actions/juego'

import { Palo, Turno } from '../model/constants'

describe('Juego actions', () => {

  describe('iniciarJuego', () => {

  it('INICIAR_JUEGO, reparte cartas e inicializa el state', () => {
    const cartas = {
      nosotros: [
        { numero: 1, palo: Palo.BASTOS },
        { numero: 4, palo: Palo.COPAS },
        { numero: 3, palo: Palo.ESPADAS },
      ],
      ellos: [
        { numero: 7, palo: Palo.BASTOS },
        { numero: 1, palo: Palo.COPAS },
        { numero: 6, palo: Palo.OROS },
      ]
    }
    expect(iniciarJuego(cartas, Turno.NOSOTROS))
      .toEqual({
        type: 'INICIAR_JUEGO',
        turno: Turno.NOSOTROS,
        cartas: {
          nosotros: [
            { numero: 1, palo: Palo.BASTOS },
            { numero: 4, palo: Palo.COPAS },
            { numero: 3, palo: Palo.ESPADAS }
          ],
          ellos: [
            { numero: 7, palo: Palo.BASTOS },
            { numero: 1, palo: Palo.COPAS },
            { numero: 6, palo: Palo.OROS },
          ]
        },
      })

    })
  
  })
  
})