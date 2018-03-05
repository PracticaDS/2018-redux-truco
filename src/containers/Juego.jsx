import { connect } from 'react-redux'
import Juego from '../components/Juego'

import { iniciarJuego } from '../actions/juego'

const mapActionsToProps = dispatch => ({
  onIniciarJuego: () => dispatch(iniciarJuego())
})

export default connect(null, mapActionsToProps)(Juego)