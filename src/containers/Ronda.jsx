import { connect } from 'react-redux'
import Ronda from '../components/Ronda'
import { Turno } from '../model/constants'

const mapStateToProps = state => ({
  ronda: state.ronda,
  nuestroTurno: state.ronda && state.ronda.turno === Turno.NOSOTROS && !state.ronda.resultado,
  turnoDeEllos: state.ronda && state.ronda.turno === Turno.ELLOS && !state.ronda.resultado
})

export default connect(mapStateToProps)(Ronda)