import {UPDATE_USERNAME} from '../loginActions.js';
import {UPDATE_USERID} from '../loginActions.js';
import {UPDATE_USERPICTURE} from '../loginActions.js';
import {LOGIN} from '../loginActions.js';


const getCredentials = (state = null, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case UPDATE_USERID:
      return {
        ...state,
        userid: action.payload
      };
      case UPDATE_USERPICTURE:
        return {
         ...state,
         userpicture: action.payload
        };
    case LOGIN:
      return action.payload;
    default: return state;
  }
};

export default getCredentials;
