import {combineReducers} from 'redux';
import locationReducer from './modules/app/reducers/locationReducer.js';
import nearbyLocationReducer from './modules/app/reducers/nearbyLocationsReducer.js';
import credentialUpdateReducer from './modules/login/reducers/credentialUpdateReducer.js';
import userReducer from './modules/login/reducers/userReducer.js';
import businessInfoReducer from './modules/locations/reducers/businessInfoReducer.js'

const rootReducer = combineReducers({
  userLocation: locationReducer,
  nearbyLocations: nearbyLocationReducer,
  credentials: credentialUpdateReducer,
  user: userReducer,
  selectedBusiness: businessInfoReducer
});

export default rootReducer;
