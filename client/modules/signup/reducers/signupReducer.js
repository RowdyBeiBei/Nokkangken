import {USERNAME} from '../signupActions.js';
import {PASSWORD} from '../signupActions.js';
import {BIO} from '../signupActions.js';
import {SIGNUP} from '../signupActions.js';


const getSignUpInfo = (state = null, action) => {
  switch (action.type) {
    case USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case BIO:
        return {
          ...state,
          bio: action.payload
        };
    case SIGNUP:
      return action.payload;
    default: return state;
  }
};

export default getSignUpInfo;
