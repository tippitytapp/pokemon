import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import logger from 'react-logger'
import './index.css';
import App from './App';

import rootReducer from './reducer'
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

