import {combineReducers} from 'redux';
import appReducer from './modules/app/appReducer.js';

const rootReducer = combineReducers({
  stocks: appReducer
});

export default rootReducer;
