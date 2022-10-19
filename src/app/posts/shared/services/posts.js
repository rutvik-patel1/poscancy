import { httpClient } from '../../../shared/services/';
import { apiBaseUrl } from '@/environment/environment';
import Cookies from 'js-cookie';
const token = Cookies.get('access_token');
const getAllPosts = () => {
    const url = apiBaseUrl + '/items/user_post'
    return httpClient.get(url).then( res => res.data )
}
const getPost = (id) => {
    const url = apiBaseUrl + '/items/user_post/' + id
    return httpClient.get(url).then(res => res.data);
} 
const CreatePost =  async (data) => {
    const url = apiBaseUrl + '/items/user_post'
         console.log(data)
        let  resp = await httpClient.post('/files',data.media).then(res => res.data.data.id);
              console.log(resp);
        let body = {media:resp,description:data.description}      
      return httpClient.post(url,body).then( res => res.data );
    
}

const countLike = (id) => {
    const url = apiBaseUrl + '/items/like?filter[post_id][_eq]=' + id + '&meta=filter_count'
    return httpClient.get(url).then( res => res.data.meta.filter_count )
}

const countComment = (id) => {
    const url = apiBaseUrl + '/items/user_post_comment?filter[post_id][_eq]=' + id + '&meta=filter_count'
    return httpClient.get(url).then( res => res.data.meta.filter_count )
}
const getCommentsByPost = (id) => {
    const url = apiBaseUrl + '/items/user_post_comment?filter[post_id][_eq]=' + id + '&fields=*.*.*'
    return httpClient.get(url).then( res => res.data )
}
const commentOnPost = (data) => {
    const url = apiBaseUrl + '/items/user_post_comment'
     return httpClient.post(url,data,{ headers: { Authorization: `Bearer ${token}` }}).then(res => res.data);
} 
export { getAllPosts, CreatePost, countLike, countComment,getPost,getCommentsByPost,commentOnPost }