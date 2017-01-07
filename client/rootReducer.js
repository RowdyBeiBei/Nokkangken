import {combineReducers} from 'redux';
import userLocationReducer from './modules/app/reducers/userLocationReducer.js';
import nearbyLocationReducer from './modules/home/reducers/nearbyLocationsReducer.js';
import userReducer from './modules/login/reducers/userReducer.js';
import signupReducer from './modules/signup/reducers/signupReducer.js';
import locationInfoReducer from './modules/locations/reducers/locationInfoReducer.js'
import timePreferanceReducer from './modules/home/reducers/timePreferanceReducer.js';
import prospectiveMatchesReducer from './modules/home/reducers/prospectiveMatchesReducer.js';
import activeProspectiveMatchReducer from './modules/prospectiveMatches/reducers/activeProspectiveMatchReducer.js';

const rootReducer = combineReducers({
  userLocation: userLocationReducer,
  nearbyLocations: nearbyLocationReducer,
  user: userReducer,
  selectedLocation: locationInfoReducer,
  signupInfo: signupReducer,
  timePreferance: timePreferanceReducer,
  prospectiveMatches: prospectiveMatchesReducer,
  activeProspectiveMatch: activeProspectiveMatchReducer
});

export default rootReducer;
