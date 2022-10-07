import { httpClient } from '../../../shared/services/';
import { Base_Url } from '../config/api-constants';
const login = (email,password) => {
    const url = Base_Url + '/auth/login'
    const body = { email: email,password: password,mode: 'cookie' }
    return httpClient.post(url,body).then(res => res.data);
  };
const refreshToken = () => {
    const url = Base_Url + '/auth/refresh'
    const body = { 'mode':'cookie' }
    return httpClient.post(url,body).then(res => res.data);
};  
const logout = (token) => {
  const url = Base_Url + '/auth/logout'
  return httpClient.post(url,{ refresh_token:token}).then(res => res.data);
};  

export { login,refreshToken,logout };
