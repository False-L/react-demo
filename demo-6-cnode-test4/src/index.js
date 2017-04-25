import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'//生成日志

//通过NODE_ENV可以来设置环境变量（默认值为development）。
const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
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
