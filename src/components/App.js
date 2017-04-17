import React from 'react'
import { Router, Route } from 'react-router'
import Layout from './Layout'
import Tasks from './Tasks/Tasks'
import Task from './Task/Task'

const App = ({ history }) => (
  <Router history={ history }>
    { console.log( history ) }
    <Route path='/' component={Layout}>
      <Route path=':filterId' component={Tasks}>
        <Route path=':taskId' component={Task}/>
      </Route>
    </Route>
  </Router>

)

export default App
