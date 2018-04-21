import { juego } from './juego.js'
import { iniciarJuego, jugarCarta, registrarPuntos } from '../actions/juego'

import { Palo, Turno } from '../model/constants'

describe('Juego reducer', () => {

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
    expect(juego(undefined, iniciarJuego(cartas, Turno.NOSOTROS)))
      .toEqual({
        puntaje: { nosotros: 0, ellos: 0 },
        ronda: {
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
          manos: [{}, {}, {}]
        }
      })
  })

  describe('jugarCarta()', () => {
    
    it('debe jugar la carta en la PRIMERA MANO si todavía nadie jugó', () => {
      const state = {
        ronda: {
          turno: 'nosotros',
          manos: [{}, {}, {}]
        }
      }
      const carta = { numero: '2', palo: 'bastos' }
      const nuevoState = juego(state, jugarCarta(carta))
      expect(nuevoState.ronda.manos)
        .toEqual([
          { nosotros: carta },
          {},
          {}
        ])
    })

    it('debe jugar la carta en la SEGUNDA MANO si ya jugó en la primera', () => {
      const state = {
        ronda: {
          turno: 'nosotros',
          manos: [{ nosotros: { numero: '1', palo: 'espada' } }, {}, {}]
        }
      }
      const carta = { numero: '2', palo: 'bastos' }
      const nuevoState = juego(state, jugarCarta(carta))
      expect(nuevoState.ronda.manos)
        .toEqual([
          { nosotros: { numero: '1', palo: 'espada' } },
          { nosotros: carta },
          {}
        ])
    })

    it('debe jugar la carta en la TERCERA MANO si ya jugó en la primera y segunda', () => {
      const state = {
        ronda: {
          turno: 'nosotros',
          manos: [
            { nosotros: { numero: '1', palo: 'espada' } },
            { nosotros: { numero: '4', palo: 'copas' } },
            {}
          ]
        }
      }
      const carta = { numero: '2', palo: 'bastos' }
      const nuevoState = juego(state, jugarCarta(carta))
      expect(nuevoState.ronda.manos)
        .toEqual([
          { nosotros: { numero: '1', palo: 'espada' } },
          { nosotros: { numero: '4', palo: 'copas' } },
          { nosotros: carta },
        ])
    })

    describe('alterna el turno', () => {

      it('de NOSOTROS a ELLOS', () => {
        const state = {
          ronda: { turno: Turno.NOSOTROS, manos: [{}, {}, {}] },
        }
        const nuevoState = juego(state, jugarCarta({ numero: '2', palo: 'bastos' }))
        expect(nuevoState.ronda.turno)
          .toEqual(Turno.ELLOS)
      })

      it('de ELLOS a NOSOTROS', () => {
        const state = {
          ronda: { turno: Turno.ELLOS, manos: [{}, {}, {}] },
        }
        const nuevoState = juego(state, jugarCarta({ numero: '2', palo: 'bastos' }))
        expect(nuevoState.ronda.turno)
          .toEqual(Turno.NOSOTROS)
      }) 

    })

    describe('marcar jugada', () => {

      it('marca la carta jugada entre las nuestras', () => {
        const carta = { numero: '2', palo: 'bastos' }
        const state = {
          ronda: { 
            turno: Turno.NOSOTROS,
            manos: [{}, {}, {}],
            cartas: {
              nosotros: [
                carta,
                { numero: '10', palo: 'espadas' }
              ],
              ellos: []
            },
          },
        }
        const nuevoState = juego(state, jugarCarta(carta))
        expect(nuevoState.ronda.cartas)
          .toEqual({
            nosotros: [
              { numero: '2', palo: 'bastos', jugada: true },
              { numero: '10', palo: 'espadas' }
            ],
            ellos: []
          })
      })

    })

  })
  
  describe('registraPuntos', () => {
    
    it('1 en NOSOTROS', () => {
      const state = {
        puntaje: { nosotros: 0, ellos: 0 },
        ronda: {}
      }
      const nuevoState = juego(state, registrarPuntos(Turno.NOSOTROS, 1))
      expect(nuevoState)
        .toEqual({
          puntaje: { nosotros: 1, ellos: 0 },
          ronda: {}
        })
    })

    it('N (5) en NOSOTROS', () => {
      const state = {
        puntaje: { nosotros: 2, ellos: 0 },
        ronda: {}
      }
      const nuevoState = juego(state, registrarPuntos(Turno.NOSOTROS, 5))
      expect(nuevoState)
        .toEqual({
          puntaje: { nosotros: 7, ellos: 0 },
          ronda: {}
        })
    })

    it('N (3) en ELLOS', () => {
      const state = {
        puntaje: { nosotros: 2, ellos: 1 },
        ronda: {}
      }
      const nuevoState = juego(state, registrarPuntos(Turno.ELLOS, 3))
      expect(nuevoState)
        .toEqual({
          puntaje: { nosotros: 2, ellos: 4 },
          ronda: {}
        })
    })

  })

})