import { always, range, pipe, without, xprod, map, zipObj } from 'ramda'
import { Palo } from '../model/constants'

export const INICIAR_JUEGO = 'INICIAR_JUEGO'
export const iniciarJuego = (cartas, turno) => ({
  type: INICIAR_JUEGO,
  cartas,
  turno
})

export const cartas = pipe(
  always(range(1, 13)),
  without([8, 9]),
  xprod(Object.values(Palo)),
  map(zipObj(['palo', 'numero']))
)