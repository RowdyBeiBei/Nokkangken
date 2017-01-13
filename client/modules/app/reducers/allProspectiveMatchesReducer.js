import {REQUEST_ALL_PROSPECTIVE_MATCHES_SENT} from '../appActions.js';
import {REQUEST_ALL_PROSPECTIVE_MATCHES_RECIEVED} from '../appActions.js';

const getAllProspectiveMatches = (state = null, action) => {
  switch (action.type) {
    case REQUEST_ALL_PROSPECTIVE_MATCHES_SENT:
      return {
        isFetching: action.isFetching
      };
    case REQUEST_ALL_PROSPECTIVE_MATCHES_RECIEVED:
      return {
        isFetching: action.isFetching,
        allProspectiveMatches: action.allProspectiveMatches
      };
    default: return state;
  }
};

export default getAllProspectiveMatches;
