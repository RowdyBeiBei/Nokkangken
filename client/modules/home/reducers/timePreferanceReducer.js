import {SET_TIME_PREFERANCE} from '../homeActions.js';

const setTimePreferance = (state = null, action) => {
  switch (action.type) {
    case SET_TIME_PREFERANCE:
      return action.payload;
    default: return state;
  }
};

export default setTimePreferance;
