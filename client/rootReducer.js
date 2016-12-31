import {combineReducers} from 'redux';
import locationReducer from './modules/app/reducers/locationReducer.js';
import nearbyLocationReducer from './modules/app/reducers/nearbyLocationsReducer.js'
import credentialUpdateReducer from './modules/login/reducers/credentialUpdateReducer.js'
import userReducer from './modules/login/reducers/userReducer.js'

const rootReducer = combineReducers({
  userLocation: locationReducer,
  nearbyLocations: nearbyLocationReducer,
  credentials: credentialUpdateReducer,
  user: userReducer
});

export default rootReducer;
