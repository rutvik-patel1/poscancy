import { httpClient } from '../../../shared/services/';
import { apiBaseUrl } from '../../../../environment/environment';

const getUsers = async () => {
    const url = apiBaseUrl + '/users?fields=role.name,*'
    return httpClient.get(url).then( res => res.data );
  };

const deleteUser = async (id) => {
    const url = apiBaseUrl + '/users/'+id
    return httpClient.delete(url).then( res => res.data );
}


export { getUsers, deleteUser }

