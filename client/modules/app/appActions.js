export const REQUEST_LOCATION = 'REQUEST_LOCATION';
import axios from 'axios';

export function requestLocation() {
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
}
