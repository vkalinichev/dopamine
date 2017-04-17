import React from 'react'
import 'react-hot-loader/patch'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
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
    <AppContainer>
      <Provider store={ store }>
        <NewApp history={ history }/>
      </Provider>
    </AppContainer>
    , mountPoint)
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App')['default']

    renderApp(NewApp)
  })
}
