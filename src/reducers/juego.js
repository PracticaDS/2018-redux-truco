import { adjust, range, mapObjIndexed } from 'ramda'
import { INICIAR_JUEGO, JUGAR_CARTA } from '../actions/juego'
import { turnoContrario } from '../model/constants'

const initialState = {
  puntaje: { nosotros: 0, ellos: 0 }
}

export const juego = (state = initialState, action) => {
  switch (action.type) {
    case INICIAR_JUEGO: return {
      puntaje: { nosotros: 0, ellos: 0 },
      ronda: {
        turno: action.turno,
        cartas: action.cartas,
        manos: range(0, 3).map(() => (
          { nosotros: undefined, ellos: undefined, resultado: undefined }
        ))
      }
    }
    case JUGAR_CARTA: return {
      ...state,
      ronda: {
        ...state.ronda,
        cartas: marcarJugada(state.ronda.cartas, action.carta),
        turno: turnoContrario(state.ronda.turno),
        manos: jugarCartaEnMano(state.ronda.manos, action.carta, state.ronda.turno)
      }
    }
    default: return state
  }
}

const jugarCartaEnMano = (manos, carta, turno) => 
  adjust(m => ({ ...m, [turno]: carta }), manos.findIndex(m => !m[turno]))(manos)

const marcarJugada = (cartas, carta) => mapObjIndexed(
  listaCartas => listaCartas.map(c => esCarta(c, carta) ? { ...c, jugada: true } : c)
)(cartas)

const esCarta = (carta, otra) => (otra.numero === carta.numero && otra.palo === carta.palo)