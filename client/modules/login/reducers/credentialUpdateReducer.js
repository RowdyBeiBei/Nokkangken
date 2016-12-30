import {UPDATE_USERNAME} from '../loginActions.js';
import {UPDATE_PASSWORD} from '../loginActions.js';
import {LOGIN} from '../loginActions.js';


const getCredentials = (state = null, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case LOGIN:
      return {};
    default: return state;
  }
};

export default getCredentials;
