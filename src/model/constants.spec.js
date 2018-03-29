import { resultadoDeMano, carta, Palo, ResultadoMano, cartaATexto } from './constants'

const { ESPADAS, BASTOS, OROS, COPAS } = Palo
const { GANADOR, PERDEDOR, EMPATE } = ResultadoMano

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

})