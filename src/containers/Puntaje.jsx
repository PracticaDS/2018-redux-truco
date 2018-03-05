import { connect } from 'react-redux'
import Puntaje from '../components/Puntaje'

const mapStateToProps = state => ({
  puntaje: state.puntaje
})

export default connect(mapStateToProps)(Puntaje)