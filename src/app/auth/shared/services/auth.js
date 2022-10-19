import { httpClient } from '../../../shared/services/';
import { apiBaseUrl } from '../../../../environment/environment';

const login = (email,password) => {
    const url = apiBaseUrl + '/auth/login'
    const body = { email: email,password: password,mode: 'cookie' }
    return httpClient.post(url,body).then(res => res.data);
  };
const loggedInUser = (token) => {
  const url = apiBaseUrl + '/users/me'
  console.log(token);
  return httpClient.get(url,{ headers: { Authorization: `Bearer ${token}` }}).then(res=>res.data);
};
const refreshToken = () => {
    const url = apiBaseUrl + '/auth/refresh'
    const body = { 'mode':'cookie' }
    return httpClient.post(url,body).then(res => res.data);
};  
const logout = (token) => {
  const url = apiBaseUrl + '/auth/logout'
  return httpClient.post(url,{ refresh_token:token}).then(res => res.data);
};  

export { login,refreshToken,logout,loggedInUser };
