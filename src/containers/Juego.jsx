import { connect } from 'react-redux'
import Juego from '../components/Juego'

import { iniciarJuegoRandom } from '../actions/juego'

const mapActionsToProps = dispatch => ({
  onIniciarJuego: () => dispatch(iniciarJuegoRandom())
})

export default connect(null, mapActionsToProps)(Juego)