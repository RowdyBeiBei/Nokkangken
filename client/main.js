import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/app/App.jsx';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';

const store = configureStore();

const root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  root
);
