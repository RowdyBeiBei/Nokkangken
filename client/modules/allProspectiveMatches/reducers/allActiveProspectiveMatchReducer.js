import {SET_ACTIVE_PROSPECTIVE_MATCH} from '../prospectiveMatchesActions.js';

const getActiveProspectiveMatch = (state= null, action) => {
  switch (action.type) {
    case SET_ACTIVE_PROSPECTIVE_MATCH:
     return {
       activeProspectiveMatch: action.payload
     };
    default: return state;
  }
};

export default getActiveProspectiveMatch;
