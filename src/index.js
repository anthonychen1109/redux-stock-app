import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import './stylesheets/styles.css';

//COMPONENTS
import Home from './components/home';

//REDUCERS
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore, createStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Home />
  </Provider>
  , document.querySelector('#root'));