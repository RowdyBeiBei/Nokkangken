import {combineReducers} from 'redux';
import locationReducer from './modules/app/appReducer.js';

const rootReducer = combineReducers({
  location: locationReducer
});

export default rootReducer;
