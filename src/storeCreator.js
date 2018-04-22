import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { juego as reducer } from './reducers/juego'

export default () => createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)