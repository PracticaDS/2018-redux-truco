import { connect } from 'react-redux'
import Juego from '../components/Juego'

import { iniciarJuego } from '../actions/juego'

const mapActionsToProps = dispatch => ({
  onIniciarJuego: () => dispatch(iniciarJuego())
})
const mapStateToProps = state => ({
  ronda: state.ronda
})

export default connect(mapStateToProps, mapActionsToProps)(Juego)