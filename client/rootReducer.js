import {combineReducers} from 'redux';
import locationReducer from './modules/app/reducers/locationReducer.js';
import nearbyLocationReducer from './modules/app/reducers/nearbyLocationsReducer.js'

const rootReducer = combineReducers({
  userlocation: locationReducer,
  nearbyLocations: nearbyLocationReducer
});

export default rootReducer;
