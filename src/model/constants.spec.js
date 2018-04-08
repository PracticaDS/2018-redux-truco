import { map, concat, pipe, repeat, flip, prop, equals } from 'ramda'
import { resultadoDeMano, evaluarManos, carta, Palo, ResultadoMano, cartaATexto, Turno } from './constants'

const { ESPADAS, BASTOS, OROS, COPAS } = Palo
const { GANADOR, PERDEDOR, EMPATE } = ResultadoMano
const { NOSOTROS, ELLOS } = Turno

describe('modelo del truco', () => {
  
  describe('resultadoDeMano(carta, otra)', () => {

    // generador de tests
    const expectResultado = (nuestra, ellos, resultado) => {
      it(`'${cartaATexto(nuestra)}' vs '${cartaATexto(ellos)}' = ${resultado}`, () => {
        expect(resultadoDeMano(nuestra, ellos)).toEqual(resultado)
        if (resultado !== EMPATE) {
          // checkear lo opuesto
          expect(resultadoDeMano(ellos, nuestra)).toEqual(resultado === GANADOR ? PERDEDOR : GANADOR)
        }
      })
    }
    
    expectResultado(carta(1, ESPADAS), carta(1, BASTOS), GANADOR)
    expectResultado(carta(1, BASTOS), carta(1, ESPADAS), PERDEDOR)

    expectResultado(carta(1, ESPADAS), carta(4, COPAS), GANADOR)
    expectResultado(carta(4, COPAS), carta(1, ESPADAS), PERDEDOR)

    expectResultado(carta(7, ESPADAS), carta(7, OROS), GANADOR)
    expectResultado(carta(7, ESPADAS), carta(7, BASTOS), GANADOR)
    expectResultado(carta(7, OROS), carta(7, ESPADAS), PERDEDOR)

    expectResultado(carta(3, ESPADAS), carta(3, OROS), EMPATE)
    
    expectResultado(carta(2, COPAS), carta(3, OROS), PERDEDOR)
    expectResultado(carta(2, COPAS), carta(3, OROS), PERDEDOR)
  })

  describe('evaluarManos(turno, cartas)', () => {

    const A = 'A'
    const B = 'B'

    // generador de tests

    const expectResultado = (resultados, esperado, turno) => {
      // const _it = equals(resultados, [EMPATE, EMPATE, EMPATE]) ? it.only : it

      it(`${resultados.join(', ')} => ${esperado} (turno = ${turno})`, () => {
        const manos = pipe(
          map(resultado => ({ resultado })),
          flip(concat)(repeat({}, 3 - resultados.length))
        )(resultados)
        expect(evaluarManos(turno)(manos)).toEqual(esperado)
      })
    }

    const expectResultadoEInverso = (resultados, esperado, turno) => {
      const generateWithSpec = spec => {
        expectResultado(resultados.map(flip(prop)(spec)), spec[esperado], turno)
      }

      generateWithSpec({
        A: GANADOR,
        B: PERDEDOR,
        empate: EMPATE
      })
      generateWithSpec({
        A: PERDEDOR,
        B: GANADOR,
        empate: EMPATE
      })
    }

    // tests

    expectResultadoEInverso([A, A], A)
    expectResultadoEInverso([A, B, A], A)
    expectResultadoEInverso([A, B, B], B)
    // empates
    expectResultadoEInverso([A, B, EMPATE], A)
    expectResultadoEInverso([A, EMPATE], A)
    expectResultadoEInverso([EMPATE, A], A)
    expectResultadoEInverso([EMPATE, EMPATE, A], A)

    // no tiene sentido invertir empates
    expectResultado([EMPATE, EMPATE, EMPATE], GANADOR, NOSOTROS)
    expectResultado([EMPATE, EMPATE, EMPATE], PERDEDOR, ELLOS)
    
  })

})