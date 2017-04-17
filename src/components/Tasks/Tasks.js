import { connect } from 'react-redux'
import TasksView from './TasksView'

const mapStateToProps = (state, {params:{filterId}}) => ({
  filterId
})

export default connect( mapStateToProps )( TasksView )
