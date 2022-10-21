import { httpClient } from '../../../shared/services/';
import { apiBaseUrl } from '../../../../environment/environment';
import Cookies from 'js-cookie';

const login = (email,password) => {
    const url = apiBaseUrl + '/auth/login'
    const body = { email: email,password: password }
    return httpClient.post(url,body).then(res => res.data);
  };
const loggedInUser = (token) => {
  const url = apiBaseUrl + '/users/me'
  console.log(token);
  return httpClient.get(url,{ headers: { Authorization: `Bearer ${token}` }}).then(res=>res.data);
};
const refreshToken = async () => {
    const url = apiBaseUrl + '/auth/refresh'
    const refresh_token = Cookies.get('refresh_token')
    // const body = { 'mode':'cookie' }
    console.log("in auh")
    fetch(url,{
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        //  credentials: 'include' ,
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({ 'refresh_token': refresh_token ,'mode':'json' })
    }).then(response => {
      return response.json()
      
    }).then((data)=>{
      console.log(data)
      Cookies.set('refresh_token',data.data.refresh_token)
      Cookies.set('access_token',data.data.access_token)
    })

    // return httpClient.post(url,body).then(res => res.data);
};  
const logout = (token) => {
  const url = apiBaseUrl + '/auth/logout'
  return httpClient.post(url,{ refresh_token:token}).then(res => res.data);
};  

export { login,refreshToken,logout,loggedInUser };
