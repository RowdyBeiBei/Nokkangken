export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const REQUEST_NEARBY_LOCATIONS = 'REQUEST_NEARBY_LOCATIONS';
import axios from 'axios';

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

export const requestNearbyLocations = ({latitude, longitude}) => {
  const nearbyLocations = axios.get('/yelp/locations', {
    params: {
      latitude: latitude,
      longitude: longitude
    }
  });

  return {
    type: REQUEST_NEARBY_LOCATIONS,
    payload: nearbyLocations
  };
};
