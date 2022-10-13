import { httpClient } from '../../../shared/services/';
import { apiBaseUrl } from '@/environment/environment';

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


export { getAllPosts, CreatePost, countLike, countComment,getPost }