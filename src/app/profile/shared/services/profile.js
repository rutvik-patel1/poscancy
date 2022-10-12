import { httpClient } from '../../../shared/services/';
import { apiBaseUrl } from '@/environment/environment';

const getUserDetails = (id) => {
    const url = apiBaseUrl + '/users/' + id
    return httpClient.get(url).then(res => res.data)
}

const getPostCount = (id) => {
    const url = apiBaseUrl + '/items/user_post_comment?&filter[user_created][_eq]=' + id + '&meta=filter_count'
    return httpClient.get(url).then(res => res.data.meta.filter_count)
}

const getProfile = (id)=>{
    const url = apiBaseUrl + `/users/${id}`
    return httpClient.get(url).then(res => res.data);
};
const updateProfile = (id,payload) => {
    const url = apiBaseUrl + `/users/${id}`
    httpClient.patch(url,payload).then(res => console.log(res));
}
export { getProfile, updateProfile, getUserDetails, getPostCount }
