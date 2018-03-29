import { juego } from './juego.js'
import { iniciarJuego, cartas, barajar } from '../actions/juego'

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

  describe('cartas()', () => {
    
    it('crea una lista de objetos con palo y numero', () => {
      const lasCartas = cartas()
      expect(lasCartas.length).toEqual(40)
      expect(lasCartas.every(o => o.palo && o.numero)).toBeTruthy()
      
      expect(lasCartas.filter(o => o.numero === 1)).toEqual([
        { palo: 'bastos', numero: 1 },
        { palo: 'oros', numero: 1 },
        { palo: 'copas', numero: 1 },
        { palo: 'espadas', numero: 1 }
      ])
    })

  })

  describe('barajar()', () => {
    
    it('retorna un objeto con "nosotros" y "ellos" y 3 cartas en cada uno', () => {
      const barajado = barajar()

      const expectMano = mano => {
        expect(mano).toBeTruthy()
        expect(mano.every(o => o.palo && o.numero)).toBeTruthy()
      }
      expectMano(barajado.ellos)
      expectMano(barajado.nosotros)
    })

  })
  
})