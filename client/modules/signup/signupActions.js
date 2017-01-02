export const USERNAME = 'USERNAME';
export const PASSWORD = 'PASSWORD';
export const BIO = 'BIO';
export const SIGNUP = 'SIGNUP';
import axios from 'axios';

export const username = (credentialValue) => {
  return {
    type: USERNAME,
    payload: credentialValue
  };
};

export const password = (credentialValue) => {
  return {
    type: PASSWORD,
    payload: credentialValue
  };
};

export const bio = (credentialValue) => {
  return {
    type: BIO,
    payload: credentialValue
  };
};

export const signup = ({username, password, bio}) => {
  const signupInfo = axios.post('/auth/signup', {
    params: {
      username: username,
      password: password,
      bio: bio
    }
  });
  return {
    type: SIGNUP,
    payload: signupInfo
  };
};
