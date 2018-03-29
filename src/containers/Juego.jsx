import { connect } from 'react-redux'
import Juego from '../components/Juego'

import { iniciarJuegoRandom } from '../actions/juego'

const mapActionsToProps = dispatch => ({
  onIniciarJuego: () => dispatch(iniciarJuegoRandom()),
  onJugarCarta: carta => console.log('Carta jugada', carta)
})

export default connect(null, mapActionsToProps)(Juego)