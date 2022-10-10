import { apiBaseUrl } from '../../environment/environment';
import { httpClient } from '../shared/services';
import Cookies from 'js-cookie';
const token = Cookies.get('refresh_token');

const getAllPosts = () => {
    const url = apiBaseUrl + '/items/user_post'
    return httpClient.get(url).then( res => res.data )
}
const CreatePost =  (data) => {
    const url = apiBaseUrl + '/items/user_post'
    // for (const value of data.values()) {
    //     console.log(value);
    //   }
    //   let description = data.get('description');
    //   let  resp =  await httpClient.post('/files',data).then(res => resp=res);
    //   console.log(resp);
      return httpClient.post(url,data,{
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
    }).then( res => console.log(res) )
    
}
export { getAllPosts,CreatePost }
export { default as postsRoutes } from './posts-routes';
