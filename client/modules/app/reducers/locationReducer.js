import {REQUEST_LOCATION} from '../appActions.js';

const getlocation = (state = null, action) => {
  switch (action.type) {
    case REQUEST_LOCATION:
      return {
        userLocation: action.payload
      };
    default: return state;
  }
};

export default getlocation;
