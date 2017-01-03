import {combineReducers} from 'redux';
import userLocationReducer from './modules/app/reducers/userLocationReducer.js';
import nearbyLocationReducer from './modules/home/reducers/nearbyLocationsReducer.js';
import credentialUpdateReducer from './modules/login/reducers/credentialUpdateReducer.js';
import userReducer from './modules/login/reducers/userReducer.js';
import signupReducer from './modules/signup/reducers/signupReducer.js';
import locationInfoReducer from './modules/locations/reducers/locationInfoReducer.js'
import timePreferanceReducer from './modules/home/reducers/timePreferanceReducer.js';

const rootReducer = combineReducers({
  userLocation: userLocationReducer,
  nearbyLocations: nearbyLocationReducer,
  credentials: credentialUpdateReducer,
  user: userReducer,
  selectedLocation: locationInfoReducer,
  signupInfo: signupReducer,
  timePreferance: timePreferanceReducer
});

export default rootReducer;
