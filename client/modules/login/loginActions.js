export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_USERID = 'UPDATE_USERID';
export const UPDATE_USERPICTURE = 'UPDATE_USERPICTURE';
export const LOGIN = 'LOGIN';
import axios from 'axios';

export const updateUsername = (credentialValue) => {
  return {
    type: UPDATE_USERNAME,
    payload: credentialValue
  };
};

export const updateUserid = (credentialValue) => {
  return {
    type: UPDATE_USERID,
    payload: credentialValue
  };
};
export const updateUserpicture = (credentialValue) => {
  return {
    type: UPDATE_USERPICTURE,
    payload: credentialValue
  };
};

export const login = (username, userid, userpicture) => {
  const user = axios.get('/auth/login', {
    params: {
      username: username,
      userid: userid,
      userpicture: userpicture
    }
  });
  return {
    type: LOGIN,
    payload: user
  };
};

// export const fblogin = () => {
    // FB.getLoginStatus(function(response) {
    // if (response.status === 'connected') {
    //   var accessToken = response.authResponse.accessToken;
    // }
    // });
    //
    // const fb = axios.get({
    //   method: 'get',
    //   url: '/auth/facebook',
    //   host: 'graph.facebook.com',
    //   params: accessToken
    // });

// };
