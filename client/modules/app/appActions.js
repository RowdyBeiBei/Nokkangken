export const REQUEST_USER_LOCATION_RECIEVED = 'REQUEST_USER_LOCATION-RECIEVED';
export const REQUEST_USER_LOCATION_SENT = 'REQUEST_USER_LOCATION-SENT';
export const REQUEST_ALL_PROSPECTIVE_MATCHES_SENT = 'REQUEST_ALL_PROSPECTIVE_MATCHES_SENT';
export const REQUEST_ALL_PROSPECTIVE_MATCHES_RECIEVED = 'REQUEST_ALL_PROSPECTIVE_MATCHES_RECIEVED';


export const requestUserLocationSent = () => {
  return {
    type: REQUEST_USER_LOCATION_SENT,
    isFetching: true
  };
};

export const requestUserLocationRecieved = (geolocation) => {
  return {
    type: REQUEST_USER_LOCATION_RECIEVED,
    isFetching: false,
    geolocation: geolocation
  };
};

export const requestAllProspectiveMatchesSent = () => {
  return {
    type: REQUEST_ALL_PROSPECTIVE_MATCHES_SENT,
    isFetching: true
  };
};

export const requestAllProspectiveMatchesRecieved = (allProspectiveMatches) => {
  return {
    type: REQUEST_ALL_PROSPECTIVE_MATCHES_RECIEVED,
    isFetching: false,
    allProspectiveMatches: allProspectiveMatches.data
  };
};
