import {REQUEST_USER_LOCATION_SENT} from '../appActions.js';
import {REQUEST_USER_LOCATION_RECIEVED} from '../appActions.js';

const getUserlocation = (state = null, action) => {
  switch (action.type) {
    case REQUEST_USER_LOCATION_SENT:
      return {
        isFetching: action.isFetching
      };
    case REQUEST_USER_LOCATION_RECIEVED:
      return {
        isFetching: action.isFetching,
        geolocation: action.geolocation
      };
    default: return state;
  }
};

export default getUserlocation;
