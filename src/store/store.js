import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = (state= {}) => {
  return state
}

const configureStore = ( initialState = {} ) => {
  return createStore(
    combineReducers({
      reducer,
      routing: routerReducer
    }),
    initialState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware( browserHistory )
      )
    )
  )
}

export default configureStore
