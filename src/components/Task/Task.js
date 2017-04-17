import { connect } from 'react-redux'
import TaskView from './TaskView'

const mapStateToProps = (state, {params:{filterId, taskId}}) => ({
  filterId,
  taskId
})

export default connect( mapStateToProps )( TaskView )
