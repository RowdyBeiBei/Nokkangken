import {createStore, compose, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../rootReducer.js';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(ReduxPromise),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  if(module.hot) {
    module.hot.accept('../rootReducer.js', () => {
      const nextRootReducer = require('../rootReducer.js').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
