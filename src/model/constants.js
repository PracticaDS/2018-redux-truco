import { pluck, equals } from 'ramda'

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

export const evaluarManos = (manos, turno) => {
  const resultados = pluck('resultado', manos)
  const _ = undefined

  if (equals([GANADOR, EMPATE, _], resultados)) {
    return GANADOR
  }
  if (equals([EMPATE, GANADOR, _], resultados)) {
    return GANADOR
  }
  if (equals([EMPATE, PERDEDOR, _], resultados)) {
    return PERDEDOR
  }
  if (equals([EMPATE, EMPATE, GANADOR], resultados)) {
    return GANADOR
  }
  if (equals([EMPATE, EMPATE, PERDEDOR], resultados)) {
    return PERDEDOR
  }
  if (equals([GANADOR, GANADOR, _], resultados)) {
    return GANADOR
  }
  if (equals([GANADOR, PERDEDOR, PERDEDOR], resultados)) {
    return PERDEDOR
  }
  if (equals([GANADOR, PERDEDOR, GANADOR], resultados)) {
    return GANADOR
  }
  if (equals([PERDEDOR, EMPATE, _], resultados)) {
    return PERDEDOR
  }
  if (equals([PERDEDOR, PERDEDOR, _], resultados)) {
    return PERDEDOR
  }
  if (equals([GANADOR, PERDEDOR, EMPATE], resultados)) {
    return GANADOR
  }
  if (equals([PERDEDOR, GANADOR, EMPATE], resultados)) {
    return PERDEDOR
  }
  if (equals([PERDEDOR, GANADOR, GANADOR], resultados)) {
    return GANADOR
  }
  if (equals([PERDEDOR, GANADOR, PERDEDOR], resultados)) {
    return PERDEDOR
  }

  if (equals([EMPATE, EMPATE, EMPATE], resultados)) {
    // gana el del turno
    return turno === Turno.NOSOTROS ? GANADOR : PERDEDOR
  }
  return _
}
