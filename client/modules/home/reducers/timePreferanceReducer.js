import {SET_DATE_TIME_PREFERANCE} from '../homeActions.js';

const setDateTimePreferance = (state = null, action) => {
  switch (action.type) {
    case SET_DATE_TIME_PREFERANCE:
      return action.payload;
    default: return state;
  }
};

export default setDateTimePreferance;
