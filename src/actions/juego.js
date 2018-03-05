
export const INICIAR_JUEGO = 'INICIAR_JUEGO'
export const iniciarJuego = (cartas, turno) => ({
  type: INICIAR_JUEGO,
  cartas,
  turno
})