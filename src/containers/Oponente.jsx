import { connect } from 'react-redux'
import Oponente from '../components/Oponente'

import { jugarCarta } from '../actions/juego'

const mapActionsToProps = dispatch => ({
  jugarCarta: carta => dispatch(jugarCarta(carta))
})

const mapStateToProps = state => ({
  turno: state.ronda && state.ronda.turno,
  cartas: state.ronda && state.ronda.cartas.ellos,
  resultado: state.ronda && state.ronda.resultado
})

export default connect(mapStateToProps, mapActionsToProps)(Oponente)