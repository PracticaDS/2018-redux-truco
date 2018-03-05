import { createStore } from 'redux'

import { juego as reducer } from './reducers/juego'

export default function() {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}