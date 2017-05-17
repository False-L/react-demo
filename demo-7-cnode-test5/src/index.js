import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.less'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'//生成日志
import Reducer from './reducers'

const middleware = [ thunk ]
middleware.push(createLogger())

const store = createStore(
  Reducer,
  applyMiddleware(...middleware)
)
ReactDOM.render(
  (<Provider store={store}>
  <Routes />
  </Provider>),
  document.getElementById('root')
);
