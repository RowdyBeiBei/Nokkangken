export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const REQUEST_NEARBY_LOCATIONS_SENT = 'REQUEST_NEARBY_LOCATIONS_SENT';
export const REQUEST_NEARBY_LOCATIONS_RECIEVED = 'REQUEST_NEARBY_LOCATIONS_RECIEVED';


export const requestLocation = () => {
  const geolocation = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((location, err) => {
      if(err) {
        reject(err);
      }else {
        resolve({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
      }
    });
  });
  return {
    type: REQUEST_LOCATION,
    payload: geolocation
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
    nearbyLocations: nearbyLocations.data.businesses
  };
};
