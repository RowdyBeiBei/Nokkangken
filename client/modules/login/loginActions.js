export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const LOGIN = 'LOGIN';
import axios from 'axios';

export const updateUsername = (credentialValue) => {
  return {
    type: UPDATE_USERNAME,
    payload: credentialValue
  };
};

export const updatePassword = (credentialValue) => {
  return {
    type: UPDATE_PASSWORD,
    payload: credentialValue
  };
};

export const login = ({username, password}) => {
  const user = axios.get('/auth/login', {
    params: {
      username: username,
      password: password
    }
  });
  return {
    type: LOGIN,
    payload: user
  };
};
