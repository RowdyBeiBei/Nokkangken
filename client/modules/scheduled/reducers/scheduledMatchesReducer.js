import {SET_SCHEDULED_MATCHES_SENT} from '../scheduledMatchesActions.js';
import {SET_SCHEDULED_MATCHES_RECIEVED} from '../scheduledMatchesActions.js';

const getScheduledMatches = (state = null, action) => {
  switch (action.type) {
    case SET_SCHEDULED_MATCHES_SENT:
      return {
        isFetching: action.isFetching
      };
    case SET_SCHEDULED_MATCHES_RECIEVED:
      return {
        isFetching: action.isFeteching,
        scheduledMatches: action.scheduledMatches
      };
    default: return state;
  }
};

export default getScheduledMatches;
