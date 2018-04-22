import { pluck, equals, flatten, flip, prop, join, pipe, compose, ifElse, applyTo, identity } from 'ramda'
import { isFunction } from 'util';

export const ResultadoMano = {
  GANADOR: 'ganador',
  PERDEDOR: 'perdedor',
  EMPATE: 'empate'
}

export const Palo = {
  BASTOS: 'bastos',
  OROS: 'oros',
  COPAS: 'copas',
  ESPADAS: 'espadas'
}

export const Turno = {
  NOSOTROS: 'nosotros',
  ELLOS: 'ellos'
}

// funciones útiles del dominio del truco

export const cartaATexto = ({ numero, palo}) => `${numero} de ${palo}`

export const turnoContrario = turno => turno === Turno.NOSOTROS ? Turno.ELLOS : Turno.NOSOTROS

export const carta = (numero, palo) => ({ numero, palo })
const todosLos = numero => Object.values(Palo).map(palo => carta(numero, palo))
const pesos = [
  [carta(1, Palo.ESPADAS)],
  [carta(1, Palo.BASTOS)],
  [carta(7, Palo.ESPADAS)],
  [carta(7, Palo.OROS)],
  todosLos(3),
  todosLos(2),
  [carta(1, Palo.COPAS), carta(1, Palo.OROS)],
  todosLos(12),
  todosLos(11),
  todosLos(10),
  [carta(7, Palo.COPAS), carta(7, Palo.BASTOS)],
  todosLos(6),
  todosLos(5),
  todosLos(4),
]

export const esCarta = (carta, otra) => (otra.numero === carta.numero && otra.palo === carta.palo)

// evaluar mano

const pesoDe = carta => pesos.findIndex(cartas => cartas.some(c => esCarta(carta, c)))

export const resultadoDeMano = (nuestra, ellos) => valorResultado(pesoDe(nuestra), pesoDe(ellos))

const valorResultado = (a, b) => a < b ? ResultadoMano.GANADOR : (a === b ? ResultadoMano.EMPATE : ResultadoMano.PERDEDOR)

// evaluar manos (ronda)

const { GANADOR, EMPATE, PERDEDOR } = ResultadoMano

const resultadosToKey = join(',')
const reglaCase = (cartasEsperadas, resultado) => ({
  [resultadosToKey(cartasEsperadas)]: resultado
})

const regla = (ganadores, ganador) => {
  const reglaCon = spec => reglaCase(ganadores.map(flip(prop)(spec)), spec[ganador])

  return {
    ...reglaCon({ A: GANADOR, B: PERDEDOR, empate: EMPATE }),
    ...reglaCon({ A: PERDEDOR, B: GANADOR, empate: EMPATE })
  }
}

const A = 'A', B = 'B', _ = undefined
const mano = turno => (turno === Turno.NOSOTROS ? GANADOR : PERDEDOR)
export const resultadoAJugador = resultado => resultado === GANADOR ? Turno.NOSOTROS : Turno.ELLOS
const reglas = {
  ...regla([A, A, _], A),
  ...regla([A, B, A], A),
  ...regla([A, A, B], B),
  ...regla([A, B, B], B),
  // empates
  ...regla([A, B, EMPATE], A),
  ...regla([A, EMPATE, _], A),
  ...regla([EMPATE, A, _], A),
  ...regla([EMPATE, EMPATE, A], A),
  ...reglaCase([EMPATE, EMPATE, EMPATE], mano)
}

export const evaluarManos = turno => pipe(
  pluck('resultado'),
  resultadosToKey,
  flip(prop)(reglas),
  ifElse(isFunction, applyTo(turno), identity)
)
