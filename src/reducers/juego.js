import { INICIAR_JUEGO } from '../actions/juego'

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
        manos: []
      }
    }
    default: return state
  }
}