import { tap, always, range, pipe, without, xprod, map, zipObj, take, splitEvery } from 'ramda'
import shuffle from 'shuffle-array'
import { Palo, Turno } from '../model/constants'

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
export const jugarCarta = carta => ({
  type: JUGAR_CARTA,
  carta
})