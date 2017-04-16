import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoApp from './reducers'

let store = createStore(todoApp)

render(
  (
  <Provider store={store}>
  <App />
  </Provider>),
  document.getElementById('app')
)