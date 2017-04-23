import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import App from './components/App'
import {Provider} from 'react-redux'
import configureStore from './store/store'
import './index.css'

const mountPoint = document.getElementById('root')
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const renderApp = (NewApp) => {
  render(
    <Provider store={ store }>
      <NewApp history={ history }/>
    </Provider>
    , mountPoint)
}

renderApp(App)
