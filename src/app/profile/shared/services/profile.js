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
    return httpClient.patch(url,payload).then(res => console.log(res));
}

const getAllUsers = () => {
    const url = apiBaseUrl + '/users?&filter[role][_eq]=e5b07e75-ac1a-4cd3-8506-18a3e6cd55fa'
    return httpClient.get(url).then(res => res.data)
}
export { getProfile, updateProfile, getUserDetails, getPostCount, getAllUsers }
