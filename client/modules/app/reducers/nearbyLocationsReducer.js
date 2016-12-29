import {REQUEST_NEARBY_LOCATIONS_SENT} from '../appActions.js';
import {REQUEST_NEARBY_LOCATIONS_RECIEVED} from '../appActions.js';

const getNearbyLocations = (state = null, action) => {
  switch (action.type) {
    case REQUEST_NEARBY_LOCATIONS_SENT:
      return {
        isFetching: action.isFetching
      };
    case REQUEST_NEARBY_LOCATIONS_RECIEVED:
      return {
        isFetching: action.isFetching,
        nearbyLocations: action.nearbyLocations
      };
    default: return state;
  }
};

export default getNearbyLocations;
