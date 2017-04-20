import './css/main.less'

import React from 'react'
import {render} from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './reducers'
import BasicRoute from './routes.js'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'//生成日志

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
const store = createStore(
  Reducer,
  applyMiddleware(...middleware)
)
console.log(store.getState())
render(
  (<Provider store={store}>
      <BasicRoute />
  </Provider>),
  document.getElementById('app')
)
//