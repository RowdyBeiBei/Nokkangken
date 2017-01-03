export const REQUEST_USER_LOCATION_RECIEVED = 'REQUEST_USER_LOCATION-RECIEVED';
export const REQUEST_USER_LOCATION_SENT = 'REQUEST_USER_LOCATION-SENT';


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
