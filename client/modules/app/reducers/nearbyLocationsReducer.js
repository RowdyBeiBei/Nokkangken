import {REQUEST_NEARBY_LOCATIONS} from '../appActions.js';

const getNearbyLocations = (state = null, action) => {
  switch (action.type) {
    case REQUEST_NEARBY_LOCATIONS:
      return {
        nearbyLocations: action.payload.data.businesses
      };
    default: return state;
  }
};

export default getNearbyLocations;
