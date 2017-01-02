import {REQUEST_USER_LOCATION} from '../appActions.js';

const getUserlocation = (state = null, action) => {
  switch (action.type) {
    case REQUEST_USER_LOCATION:
      return {
        userLocation: action.payload
      };
    default: return state;
  }
};

export default getUserlocation;
