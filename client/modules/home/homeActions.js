export const SET_DATE_TIME_PREFERANCE = 'SET_DATE_TIME_PREFERANCE';
export const REQUEST_NEARBY_LOCATIONS_SENT = 'REQUEST_NEARBY_LOCATIONS_SENT';
export const REQUEST_NEARBY_LOCATIONS_RECIEVED = 'REQUEST_NEARBY_LOCATIONS_RECIEVED';
export const REQUEST_PROSPECTIVE_MATCHES_SENT = 'REQUEST_PROSPECTIVE_MATCHES_SENT';
export const REQUEST_PROSPECTIVE_MATCHES_RECIEVED = 'REQUEST_PROSPECTIVE_MATCHES_RECIEVED';

export const setDateTimePreferance = (time) => {
  return {
    type: SET_DATE_TIME_PREFERANCE,
    payload: time
  };
};

export const requestNearbyLocationsSent = () => {
  return {
    type: REQUEST_NEARBY_LOCATIONS_SENT,
    isFetching: true,
    nearbyLocations: []
  };
};

export const requestNearbyLocationsRecieved = (nearbyLocations) => {
  return {
    type: REQUEST_NEARBY_LOCATIONS_RECIEVED,
    isFetching: false,
    nearbyLocations: nearbyLocations.data
  };
};

export const requestProspectiveMatchesSent = () => {
  return {
    type: REQUEST_PROSPECTIVE_MATCHES_SENT,
    isFetching: true
  };
};

export const requestProspectiveMatchesRecieved = (prospectiveMatches) => {
  return {
    type: REQUEST_PROSPECTIVE_MATCHES_RECIEVED,
    isFetching: false,
    prospectiveMatches: prospectiveMatches.data.prospectiveMatches
  };
};
