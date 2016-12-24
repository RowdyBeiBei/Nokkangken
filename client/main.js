import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/app/App.jsx';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';
import {Router, Route, hashHistory} from 'react-router';

const store = configureStore();

const root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}/>
    </Router>
  </Provider>,
  root
);
