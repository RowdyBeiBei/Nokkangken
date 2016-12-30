import {LOGIN} from '../loginActions.js';

const userData = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload.data;
    default: return state;
  }
};

export default userData;
