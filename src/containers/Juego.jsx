import { connect } from 'react-redux'
import Juego from '../components/Juego'

import { iniciarJuegoRandom, jugarCarta } from '../actions/juego'

const mapActionsToProps = dispatch => ({
  onIniciarJuego: () => dispatch(iniciarJuegoRandom()),
  onJugarCarta: carta => dispatch(jugarCarta(carta))
})

export default connect(null, mapActionsToProps)(Juego)