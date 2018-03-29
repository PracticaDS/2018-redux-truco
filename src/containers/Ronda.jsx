import { connect } from 'react-redux'
import Ronda from '../components/Ronda'

const mapStateToProps = state => ({
  ronda: state.ronda
})

export default connect(mapStateToProps)(Ronda)