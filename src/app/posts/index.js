import { apiBaseUrl } from '../../environment/environment';
import { httpClient } from '../shared/services';
// import Cookies from 'js-cookie';
// const token = Cookies.get('refresh_token');

const getAllPosts = () => {
    const url = apiBaseUrl + '/items/user_post'
    return httpClient.get(url).then( res => res.data )
}
const CreatePost =  async (data) => {
    const url = apiBaseUrl + '/items/user_post'
         console.log(data)
        let  resp = await httpClient.post('/files',data.media).then(res => res.data.data.id);
              console.log(resp);
        let body = {media:resp,description:data.description}      
      return httpClient.post(url,body).then( res => res.data );
    
}
export { getAllPosts,CreatePost }
export { default as postsRoutes } from './posts-routes';
