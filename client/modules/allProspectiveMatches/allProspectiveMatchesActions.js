export const SET_ACTIVE_PROSPECTIVE_MATCH = 'SET_ACTIVE_PROSPECTIVE_MATCH';


export const setActiveProspectiveMatch = (activeProspectiveMatch) => {
  return {
    type: SET_ACTIVE_PROSPECTIVE_MATCH,
    payload: activeProspectiveMatch
  };
};
