import { pipe, mergeDeepLeft, adjust, range, mapObjIndexed, prop, equals } from 'ramda'
import { INICIAR_JUEGO, JUGAR_CARTA } from '../actions/juego'
import { turnoContrario, ResultadoMano, esCarta, resultadoDeMano, Turno, evaluarManos } from '../model/constants'

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
      ronda: evaluarRonda(state.ronda.turno, {
        ...state.ronda,
        cartas: marcarJugada(state.ronda.cartas, action.carta),
        turno: turnoContrario(state.ronda.turno),
        manos: jugarCartaEnMano(state.ronda.manos, action.carta, state.ronda.turno)
      })
    }
    default: return state
  }
}

const jugarCartaEnMano = (manos, carta, turno) => 
  adjust(
    actualizarMano(carta, turno),
    manos.findIndex(m => !m[turno])
  )(manos)

const actualizarMano = (carta, turno) => pipe(
  mergeDeepLeft({ [turno]: carta }),
  mano => ({
    ...mano,
    resultado: calcularResultadoMano(mano)
  })
)

const calcularResultadoMano = ({ nosotros, ellos }) => 
  nosotros && ellos && resultadoDeMano(nosotros, ellos)

const marcarJugada = (cartas, carta) => mapObjIndexed(
  listaCartas => listaCartas.map(c => esCarta(c, carta) ? { ...c, jugada: true } : c)
)(cartas)

const evaluarRonda = (turno, ronda) => ({
    ...ronda,
    resultado: evaluarManos(turno)(ronda.manos)
})
