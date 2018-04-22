import { tap, always, range, pipe, without, xprod, map, zipObj, take, splitEvery } from 'ramda'
import shuffle from 'shuffle-array'
import { Palo, Turno, turnoContrario, resultadoAJugador } from '../model/constants'

export const INICIAR_JUEGO = 'INICIAR_JUEGO'
export const iniciarJuego = (cartas, turno) => ({
  type: INICIAR_JUEGO,
  cartas,
  turno
})


export const iniciarJuegoRandom = () => iniciarJuego(barajar(), turnoRandom())

const turnoRandom = () => Math.random() > 0.5 ? Turno.NOSOTROS : Turno.ELLOS 

export const cartas = pipe(
  always(range(1, 13)),
  without([8, 9]),
  xprod(Object.values(Palo)),
  map(zipObj(['palo', 'numero']))
)

export const barajar = pipe(
  cartas,
  tap(shuffle),
  take(6),
  splitEvery(3),
  zipObj([Turno.NOSOTROS, Turno.ELLOS])
)

export const JUGAR_CARTA = 'JUGAR_CARTA'
export const jugarCartaSimple = carta => ({
  type: JUGAR_CARTA,
  carta
})
export const jugarCarta = carta => (dispatch, getState) => {
  dispatch(jugarCartaSimple(carta))
  const state = getState()
  if (state.ronda.resultado) {
    setTimeout(() => {
      // por ahora no tenemos cantos, solo 1 punto ganas
      dispatch(registrarPuntos(resultadoAJugador(state.ronda.resultado), 1))
      dispatch(iniciarRonda(turnoContrario(state.esMano)))
    }, 2000)
  }
}

export const INICIAR_RONDA = 'INICIAR_RONDA'
export const iniciarRonda = (turno) => ({
  type: INICIAR_RONDA,
  cartas: barajar(),
  turno
})

export const REGISTRAR_PUNTOS = 'REGISTRAR_PUNTOS'
export const registrarPuntos = (jugador, puntos) => ({
  type: REGISTRAR_PUNTOS, 
  jugador,
  puntos
})