export const SIGNUP = 'SIGNUP';
import axios from 'axios';

export const signup = ({username, password, bio}) => {
  const user = axios.get('/auth/signup', {
    params: {
      username: username,
      password: password,
      bio: bio
    }
  });
  return {
    type: SIGNUP,
    payload: user     
  };
};
