import {REQUEST_LOCATION} from '../appActions.js';

export default function getlocation(state = null, action) {
  switch (action.type) {
    case REQUEST_LOCATION:
      return {
        userlocation: action.payload
      };
    default: return state;
  }
}
