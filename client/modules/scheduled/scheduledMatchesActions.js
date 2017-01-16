export const SET_SCHEDULED_MATCHES_SENT = 'GET_SCHEDULED_MATCHES_SENT';
export const SET_SCHEDULED_MATCHES_RECIEVED = 'GET_SCHEDULED_MATCHES_RECIEVED';

export const setScheduledMatchesSent = () => {
  return {
    type: SET_SCHEDULED_MATCHES_SENT,
    isFetching: true
  };
};

export const setScheduledMatchesRecieved = (scheduledMatches) => {
  return {
    type: SET_SCHEDULED_MATCHES_RECIEVED,
    isFetching: false,
    scheduledMatches: scheduledMatches
  };
};
